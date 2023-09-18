function topla(){
    const textSayi1=document.querySelector("#sayi1");
    const textSayi2=document.querySelector("#sayi2");
    const sonucEl=document.querySelector("#sonuc");
    const toplamEl= Number(textSayi1.value) + Number(textSayi2.value);

    sonucEl.innerHTML=`Sonuç: ${toplamEl}`;
}