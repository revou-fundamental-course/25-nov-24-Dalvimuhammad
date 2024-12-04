

  function selectGender(selectedGender) {
    const genderContainer = document.getElementById("gender");
    genderContainer.setAttribute("data-gender", selectedGender);

    document.getElementById("pria").classList.toggle("active", selectedGender === "pria");
    document.getElementById("wanita").classList.toggle("active", selectedGender === "wanita");
  }
  
  function hitungBMI() {

    event.preventDefault();

    const genderContainer = document.getElementById("gender");
    const gender = genderContainer.getAttribute("data-gender");
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100; 

    if (!gender) {
      alert("Pilih gender terlebih dahulu!");
      return;
    }
  
    if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0 || berat <= 0) {
      alert("Masukkan nilai yang valid!");
      return;
    }
  
    const bmi = berat / (tinggi * tinggi);
    const hasilBMI = document.getElementById("hasilBMI");
    const kategoriBMI = document.getElementById("kategoriBMI");
    const detailBMI = document.getElementById("detailBMI");
    const penjelBMI = document.getElementById("penjelBMI");
  
    hasilBMI.textContent = `BMI Anda: ${bmi.toFixed(2)}`;

    if (gender === "pria") {
      if (bmi < 18.5) {
        kategoriBMI.textContent = "Kekurangan berat badan - Pria";
        kategoriBMI.style.color = "#000000FF";
        penjelBMI.textContent = "Anda berada dalam kategeri berat badan kurang";
        detailBMI.textContent = "Hubungi dokter Anda untuk informasi lebih lanjut tentang diet dan nutrisi yang tepat untuk meningkatkan kesehatan.";
        detailBMI.style.textAlign = "justify"
      } else if (bmi < 24.9) {
        kategoriBMI.textContent = "Normal - Pria";
        kategoriBMI.style.color = "#000000FF";
        penjelBMI.textContent = "Anda berada dalam kategori Normal";
        detailBMI.textContent = "Bagus!! Jaga berat badan anda tetap normal dengan makanan seimbang dan olahraga fisik.";
        detailBMI.style.textAlign = "justify"
      } else if (bmi < 29.9) {
        kategoriBMI.textContent = "Kelebihan berat badan - Pria";
        kategoriBMI.style.color = "#000000FF";
        penjelBMI.textContent = "Anda berada dalam kategori berat badan berlebih";
        detailBMI.textContent = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan kalori dan melakukan aktivitas fisik. Jika Anda termasuk dalam kategori ini, sebaiknya turunkan berat badan Anda ke berat badan normal"
        detailBMI.style.textAlign = "justify"
      } else {
        kategoriBMI.textContent = "Obesitas - Pria";
        kategoriBMI.style.color = "#E00000FF";
        penjelBMI.textContent = "Anda berada dalam kategori Obesitas"
        detailBMI.textContent = "Yuk, coba turunkan berat badan Anda dan terapkan pola hidup sehat dengan memperhatikan asupan kalori dan olahraga. Segera hubungi dokter untuk pemeriksaan medis agar Anda tahu risiko yang berkaitan dengan berat badan Anda."
        detailBMI.style.textAlign = "justify"
      }
    } else if (gender === "wanita") {
      if (bmi < 17.5) {
        kategoriBMI.textContent = "Kekurangan berat badan - Wanita";
        kategoriBMI.style.color = "#000000FF";
        penjelBMI.textContent = "Anda berada dalam kategeri berat badan kurang";
        detailBMI.textContent = "Hubungi dokter Anda untuk informasi lebih lanjut tentang diet dan nutrisi yang tepat untuk meningkatkan kesehatan.";
        detailBMI.style.textAlign = "justify"
      } else if (bmi < 23.9) {
        kategoriBMI.textContent = "Normal - Wanita";
        kategoriBMI.style.color = "#000000FF";
        penjelBMI.textContent = "Anda berada dalam kategori Normal";
        detailBMI.textContent = "Bagus!! Jaga berat badan anda tetap normal dengan makanan seimbang dan olahraga fisik.";
        detailBMI.style.textAlign = "justify"
      } else if (bmi < 28.9) {
        kategoriBMI.textContent = "Kelebihan berat badan - Wanita";
        kategoriBMI.style.color = "#000000FF";
        penjelBMI.textContent = "Anda berada dalam kategori berat badan berlebih";
        detailBMI.textContent = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan kalori dan melakukan aktivitas fisik. Jika Anda termasuk dalam kategori ini, sebaiknya turunkan berat badan Anda ke berat badan normal"
        detailBMI.style.textAlign = "justify"
      } else {
        kategoriBMI.textContent = "Obesitas - Wanita";
        kategoriBMI.style.color = "#BC0000FF";
        penjelBMI.textContent = "Anda berada dalam kategori Obesitas"
        detailBMI.textContent = "Yuk, coba turunkan berat badan Anda dan terapkan pola hidup sehat dengan memperhatikan asupan kalori dan olahraga. Segera hubungi dokter untuk pemeriksaan medis agar Anda tahu risiko yang berkaitan dengan berat badan Anda."
        detailBMI.style.textAlign = "justify"
      }
    }
  }

  document.getElementById("hitungButton").addEventListener("click", hitungBMI);

  