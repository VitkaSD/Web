function CheckNumber(number) {
    if (number == 0){
        console.log("Ноль");
        return 0;
    }
    const t = [];
    if (number%2==0){
        t.push("Чётное, ");
    }
    else{
        t.push("Нечётное, ");
    }
    if (number>0){
        t.push("Положительное");
    }
    else{
        t.push("Отрицательное");
    }
    console.log(t.join(""));
    return 0;
}
let a = -5;
CheckNumber(a);