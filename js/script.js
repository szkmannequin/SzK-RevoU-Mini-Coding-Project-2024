// Menentukan Constanta
const tinggiBadan = document.getElementById('input-tinggi-badan');
const usia = document.getElementById('input-usia');
const beratBadan = document.getElementById('input-berat-badan');
const hasilBmiElement = document.querySelector('.hasil-bmi');
const kategoriBmiElement = document.querySelector('.kategori-bmi');
const dataUserElement = document.querySelector('.data-user .usia');
const jenisKelaminElement = document.querySelector('.data-user .jenis-kelamin');

// Klasifikasi hasil BMI
function klasifikasiBmi(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan Berat Badan";
    } else if (bmi < 25) {
        return "Normal (Ideal)";
    } else if (bmi < 30) {
        return "Kelebihan Berat Badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

// Perhitungan dan menampilkan hasil pada html page
function hitungBmi(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    const tbad = parseFloat(tinggiBadan.value) / 100;
    const bbad = parseFloat(beratBadan.value);
    const usi = parseInt(usia.value, 10);
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked');

    if (isNaN(tbad) || isNaN(bbad) || isNaN(usi) || tbad > 3 || bbad > 200 || !jenisKelamin) {
        alert('Pastikan semua input terisi dengan benar');
        return;
    }

    let bmi = bbad / (tbad * tbad);
    bmi = bmi.toFixed(1);

    hasilBmiElement.textContent = bmi;
    kategoriBmiElement.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
    dataUserElement.textContent = `${usi}`;
    jenisKelaminElement.textContent = jenisKelamin.value;
}

// Reset Button 
function resetForm() {
    document.getElementById('bmi-form').reset();
    hasilBmiElement.textContent = '0.0';
    kategoriBmiElement.textContent = '';
    dataUserElement.textContent = '';
    jenisKelaminElement.textContent = '';
}

// Event Submit dan Reset
document.getElementById('bmi-form').addEventListener('submit', hitungBmi);
document.getElementById('reset-button').addEventListener('click', resetForm);