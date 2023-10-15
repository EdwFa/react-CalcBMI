import './CalcBMI.css'

function CalcButton() {
    const handleClick = (e) => {
        e.preventDefault();
        const massa = parseFloat(document.getElementById('вес').value);
        const heigth = parseFloat(document.getElementById('рост').value);
        const bmi = massa / ((heigth / 100) * (heigth / 100));
        document.getElementById('bmi').innerHTML = bmi.toString( 10);
        //alert('Индекс массы тела - ' + bmi.toString());
    }
    return (
        <button onClick={handleClick}>
            Расчитать
        </button>
    );
}

export function CalcBMI(){
    return(
        <>
            <div>
                <p>Вес, кг: &nbsp;</p>
                <input id="вес" type="number" defaultValue="90" step="1"/>
                <p>Рост, см: &nbsp;</p>
                <input id="рост" type="number" defaultValue="184" step="1"/>
                <p>-----------------</p>
                <CalcButton />
                <p>-----------------</p>
                <p> BMI:  <div id="bmi"></div>
                </p>
                <p><b>Рекомендации Всемирной Организации Здравоохранения (ВОЗ):</b></p>
                <p>[16 и менее]..........  Выраженный дефицит массы</p>
                <p>[16 - 18,5]...........  Недостаточная (дефицит) масса тела</p>
                <p>[18,5 - 25]...........  Норма </p>
                <p>[25 - 30].............. Избыточная масса тела (предожирение)</p>
                <p>[30 - 35].............. Ожирение первой степени</p>
                <p>[35 - 40].............. Ожирение второй степени</p>
                <p>[40 и более]........... Ожирение третьей степени (морбидное)</p>
            </div>
        </>
    )
}