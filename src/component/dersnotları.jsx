// ilk 20 dakikayı dinle!!!!!!!!!!
// formik ve yap iki darklı kütürphane kullancağız formaları kotnrol etmek için formik formalar için bizim yazdığımız statet handle fonk oncahance fonk gibi kodları arkadan yapıyor bunlara form handing kğtüphane diyor formik onlardan biri. yap da hatayı algılayıp bize dönüş sağlayan bir kütüphane mui nin helpertext i gibi. 
// logini biz yepacağız register ödev olacak. 
//TODO___FORMİK KÜTÜpHNEDİ
// kolay şekilde react ortamında formların kontrolunu sağlayan bir kütüpjhane alternatifi react hook form bşrbirine çok benziyorlar. İki alternatif kütüphane 
// yarn add formik şeklinde import ediyorsun 
// toplam 4 tane probu var 
//initialvalues,validate,onSubmit ve components diye 4 ayrı probu var. 
//initialvalues=aşağıda kullanılacak inputaların isimleri key value şeklinde {email:"",password:""} gibi veriliyor. veridğimiz isimlerden forbik atka tarafta stateler oluşturuyor. bunları da values diye bir objenin içerisine attığından values. email values. pasword vb şekilde ulaşabiliyoruz. 
//validate || validationscima: validasyon kurallarını vereceğimiz yer harici bir validate kullanıyorusak valitation schema kurallarını veriyoruz. burada proje de yub kullanacağız. 
// onSubmit =>formun elemenlerini submit edildiğinde ne yapılacağına dair callback func oluyorburada fonk iki parametresi var isimler değişebilir ama sırası öenmli values,action şeklinde. action da bir prob bunun içinde onlarca farklı parametre var. setsubmitting,handlechange,errors,handleblur vb...
// conponent probu inputlarda yazdıklarımızı yukarıda component halinde yazıp aşağıda taha temiz yazmamızı sağlıyor ama lkullanmak zorunda değiliz. 
//touched: eror maili yakalamak için 

//TODO-- YUP
// import etmek gerek
//kullanımı kolay pratik bir kğtüphane
//sadece react için değil diğer ortamlarda da kullanılıyor. 
//TODO_RegEX nedir ne iin kullanılır:
//egEx (Regular Expression), metinlerde belirli kalıpları tanımlamak için kullanılan bir dildir. Genellikle metin işleme ve arama işlemlerinde kullanılır. RegEx, belirli bir metin içindeki karakterleri, kelime gruplarını veya desenleri tanımlamak için özel semboller ve karakterlerden oluşan bir dizi kullanır.

//Örneğin, bir RegEx deseni şu şekilde olabilir: /[0-9]+/. Bu desen, metindeki bir veya daha fazla rakamı temsil eder. Yani, "123" gibi bir rakam dizisini eşleştirecektir.
//kurallarını fe kısmına veridldiği gibi be kısmına da verilmeli. aynı validetionlar be tarafındada olmalı. ui tarafından ele geçerilmeler olabilir bu durumda uygulamam zarar görür.
//*isSubmiting 
//action içinde olan  bir boolen değişkendir. bunu kullanabiliyorsun submşit işlemi devam ederken is submiting true oluyor formik yapıyor bunu. mesela onsubmit işlemi devam ederken butonu disable yapacaksan bunu kullanabilirsin.
// onSubmit aşamasında api isteklerini çok yerde yapacağımızdan ayrı bir dıosya oluşturduk genelede servises deniyor. 
// login bir post istediğidir. aycsawait ile yapabiliri. 
//*TOKEN: kişinin token bilgisini güvenli api larda tokensiz işlem yapılmaz toklen i global state e atayıp oradan kullanmalıytız. 
//!api request te çektiğimiz verileri GLOBAL STATE E NASIL AKTARIRIZ
//1- öncelikle slicesimizi oluşturmalıyız nelere globalda ihtiyacımız var onu yazmalıyız. en öenmlisi token bilgisi bu passwordu saklayıp sonraki her işlemimizde bu token ı kullanmalıyız. 
///TODO__ bu workarounda çok öenmli bir hata var dispatch kullanmaya çalışıyoruz o bir costom hook ama biz bu halde normal func kullanıyoruz o yüzden hata alıyoruz. ya comp içinde ya da costom hook içinde kullanmalıyız. bu hatadan kurtulmak için use ile costom hook haline çeviriyoruz!!!
//?costom hook içinde js döndürmeyen ve içinde react hooklarını kullanabileceğin özel bir fonk yapısıdır.bir kere yazarsın her yerde kullanırısın compo gibi. 