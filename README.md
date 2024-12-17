# Courses-App
Bu React Native bileşeni, modal kullanarak bir veri girişi sağlar. Kullanıcı, bir metin girişi yaptıktan sonra "EKLE" butonuna tıklayarak bu veriyi ekler. "İPTAL ET" butonuna tıkladığında ise girilen veri silinir ve modal kapanır.
Bileşen Özellikleri:

    Modal Açma/Kapama:
        visible props'u ile modal açılır/kapanır.
        İPTAL ET butonuna basıldığında onCancel fonksiyonu çağrılır.

    Veri Girişi:
        Kullanıcı, TextInput alanına veri girer.
        Girilen veri, state'de (enterCourseText) tutulur.

    EKLE Butonu:
        Kullanıcının girdiği veri onAddCourse fonksiyonu üzerinden dışarı gönderilir.
        Veri gönderildikten sonra giriş alanı sıfırlanır.

    İPTAL ET Butonu:
        Girilen veri temizlenir.
        Modal kapanır (onCancel çağrılır).

Kullanılan Teknolojiler:

    React Native bileşenleri: Modal, TextInput, Button, View, Image.
    State Yönetimi: useState kullanılarak giriş verisi kontrol edilir.

Bu bileşen, projelerde bir kurs ekleme veya benzeri veri giriş formları için kullanılabilir.

# Look at the examples videos below

https://github.com/user-attachments/assets/48383ccc-8671-4885-a79d-a1a49ad84259
