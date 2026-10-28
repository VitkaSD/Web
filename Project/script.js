const notes = [
    { title: "Петербург", desc: "Короткая заметка о технике тайм-менеджмента, которая помогает бороться с прокрастинацией. Суть метода: если дело занимает меньше двух минут, его нужно выполнить немедленно, не записывая в список задач. В заметке можно разобрать, почему это работает (снижение когнитивной нагрузки) и привести примеры микрозадач (помыть чашку, ответить на короткое письмо, загрузить документ).", date: "2026-10-25" },
    { title: "Петербург1", desc: "Психологическая заметка о распространенном явлении среди профессионалов. План: объяснить, что такое синдром самозванца, перечислить его типичные признаки (страх разоблачения, обесценивание своих успехов), а в конце дать 3 практических совета, как с ним справляться (например, ведение дневника достижений и отказ от сравнения себя с другими).", date: "2026-10-26" },
    { title: "Петербург2", desc: "Практический план для тех, кто хочет сделать дом более уютным и свободным. Заметка может начинаться с принципа «менее значит больше». Основная часть — пошаговая инструкция: 1) Выберите одну зону (например, шкаф с одеждой); 2) Разделите вещи на категории (оставить, выбросить, отдать); 3) Используйте правило «одна вещь пришла — одна ушла». Завершить можно списком преимуществ минимализма для mental health.", date: "2026-10-27" },
    { title: "Петербург3", desc: "Заметка для развития soft skills. В описании стоит затронуть разницу между закрытыми и открытыми вопросами. План: показать, как открытые вопросы («Что ты об этом думаешь?») помогают налаживать контакт в отличие от закрытых («Тебе нравится?»). Привести примеры из жизни (на работе, в отношениях) и дать упражнение: в течение дня задавать собеседникам минимум 3 вопроса, начинающихся с «Как» или «Что».", date: "2026-10-24" }
];

const weekdays = [
    "ВС","ПН","ВТ","СР","ЧТ","ПТ", "СУ"
];


let noteItemsMap = new Map(); 

function renderNotes(notes) {
    const noteList = document.querySelector('.note-list');
    
    if (!noteList) return;
    
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        

        noteItemsMap.set(index, noteItem);
        

        const dateObj = new Date(note.date);
        const dayOfMonth = dateObj.getDate();
        const dayOfWeek = weekdays[dateObj.getDay()];
        

        const dateSection = document.createElement('div');
        dateSection.className = 'note-date';
        
        const dateNum = document.createElement('span');
        dateNum.className = 'date-num';
        dateNum.textContent = dayOfMonth;
        
        const dateDay = document.createElement('span');
        dateDay.className = 'date-day';
        dateDay.textContent = dayOfWeek;
        
        dateSection.appendChild(dateNum);
        dateSection.appendChild(dateDay);
        

        const contentSection = document.createElement('div');
        contentSection.className = 'note-content';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'note-title';
        titleDiv.textContent = note.title;
        
        
        const snippetDiv = document.createElement('div');
        snippetDiv.className = 'note-snippet';
        snippetDiv.textContent = note.desc || '';
        const descText = note.desc || '';
        let displayDesc = descText;
        if (descText.length > 50) {
            displayDesc = descText.substring(0, 47) + '...';
        }


        snippetDiv.textContent = displayDesc;
        contentSection.appendChild(titleDiv);
        contentSection.appendChild(snippetDiv);
        

        noteItem.appendChild(dateSection);
        noteItem.appendChild(contentSection);
        

        noteItem.addEventListener('click', function() {
            handleNoteClick(index, notes[index]);
        });
        
        noteList.appendChild(noteItem);
    });
}

function handleNoteClick(index, note) {

    updateEditorContent(note);
    
    selectNote(index);
}


function selectNote(noteIndex) {
    const noteItems = document.querySelectorAll('.note-item');
    

    noteItems.forEach((item, i) => {
        item.classList.remove('active');
        

        if (notes[i] && typeof notes[i].is_active !== 'undefined') {
            notes[i].is_active = false;
        }
    });
    

    const activeItem = noteItems[noteIndex];
    if (activeItem) {
        activeItem.classList.add('active');

        if (notes[noteIndex] && typeof notes[noteIndex].is_active !== 'undefined') {
            notes[noteIndex].is_active = true;
        }
    }
}


function updateEditorContent(note) {
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle && note.title) {
        mainTitle.textContent = note.title;
    }
    

    const editorContent = document.querySelector('.editor-content');
    if (editorContent) {

        const existingParagraphs = editorContent.querySelectorAll('p');
        existingParagraphs.forEach(p => p.remove());
        
  
        if (note.desc) {
            const descParts = note.desc.split('\n\n').filter(part => part.trim());
            
            descParts.forEach(part => {
                const paragraph = document.createElement('p');
                paragraph.textContent = part.trim();
                editorContent.appendChild(paragraph);
            });
        }
    }
}
function toggleNoteList() {
    const noteList = document.querySelector('.note-list');
    
    if (!noteList) return;
    
    noteList.classList.toggle('collapsed');
}

const sidebarToggle = document.getElementById('sidebar-toggle');
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleNoteList);
}

renderNotes(notes);
