function showKetQua(element, text) {
    element.innerText = text;
    element.classList.remove("hidden");
}
/**
 * Bài 1: Tính tiền lương nhân viên
    Mô hình 3 khối:
    - Input:
        - Luong1Ngay: Number
        - SoNgayCong: Number
    - Xử lý:
        - TinhLuong: Number = Luong1Ngay * SoNgayCong
    - Output:
        - KetQuaLuong: String
 */
document.getElementById("btnTinhLuong").addEventListener("click", () => {
    // Input
    const luong1Ngay = Number(document.getElementById("luong1Ngay").value);
    const soNgayCong = Number(document.getElementById("soNgayCong").value);

    // Xử lý
    const tienLuong = luong1Ngay * soNgayCong;

    // Output
    showKetQua(
        document.getElementById("ketQuaLuong"),
        `Tiền lương: ${tienLuong.toLocaleString("vi-VN")} VNĐ`
    );
});

// Bài 2: Tính giá trị trung bình của 5 số
/**
 * Bài 2: Tính giá trị trung bình của 5 số
    Mô hình 3 khối:
    - Input:
        - So1: Number
        - So2: Number
        - So3: Number
        - So4: Number
        - So5: Number
    - Xử lý:
        - TinhTrungBinh: Number = (So1 + So2 + So3 + So4 + So5) / 5
    - Output:
        - KetQuaTrungBinh: String
 */
document.getElementById("btnTinhTrungBinh").addEventListener("click", () => {
    // Input
    const so1 = Number(document.getElementById("so1").value);
    const so2 = Number(document.getElementById("so2").value);
    const so3 = Number(document.getElementById("so3").value);
    const so4 = Number(document.getElementById("so4").value);
    const so5 = Number(document.getElementById("so5").value);

    // Xử lý
    const trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    // Output
    showKetQua(
        document.getElementById("ketQuaTrungBinh"),
        `Giá trị trung bình: ${trungBinh}`
    );
});

// Bài 3: Quy đổi tiền tệ từ USD sang VNĐ
/**
 * Bài 3: Quy đổi tiền tệ từ USD sang VNĐ
    Mô hình 3 khối:
    - Input:
        - SoTienUSD: Number
        - TyGia: 23.500
    - Xử lý:
        - SoTienVND: Number = SoTienUSD * TyGia
    - Output:
        - KetQuaQuyDoi: String
 */
document.getElementById("btnQuyDoi").addEventListener("click", () => {
    // Input
    const soTienUSD = Number(document.getElementById("soTienUSD").value);
    const tyGia = 23500;

    // Xử lý
    const soTienVND = soTienUSD * tyGia;

    // Output
    showKetQua(
        document.getElementById("ketQuaQuyDoi"),
        `${soTienVND.toLocaleString("vi-VN")} VNĐ`
    );
});

// Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
    Mô hình 3 khối:
    - Input:
        - ChieuDai: Number
        - ChieuRong: Number
    - Xử lý:
        - DienTich: Number = ChieuDai * ChieuRong
        - ChuVi: Number = (ChieuDai + ChieuRong) * 2
    - Output:
        - KetQuaDienTich: String
        - KetQuaChuVi: String
 */
document.getElementById("btnTinhHCN").addEventListener("click", () => {
    // Input
    const chieuDai = Number(document.getElementById("chieuDai").value);
    const chieuRong = Number(document.getElementById("chieuRong").value);

    // Xử lý
    const dienTich = chieuDai * chieuRong;
    const chuVi = (chieuDai + chieuRong) * 2;

    // Output
    document.getElementById("ketQuaDienTich").innerText = `Diện tích: ${dienTich}`;
    document.getElementById("ketQuaChuVi").innerText = `Chu vi: ${chuVi}`;
    document.getElementById("ketQuaHCN").classList.remove("hidden");
});

// Bài 5: Tính tổng 2 ký số của số có 2 chữ số
/**
 * Bài 5: Tính tổng 2 ký số của số có 2 chữ số
    Mô hình 3 khối:
    - Input:
        - SoHaiChuSo: Number
    - Xử lý:
        - HangChuc: Number = Math.floor(SoHaiChuSo / 10)
        - HangDonVi: Number = SoHaiChuSo % 10
        - TongKySo: Number = HangChuc + HangDonVi
    - Output:
        - KetQuaTongKySo: String
 */
document.getElementById("btnTinhTongKySo").addEventListener("click", () => {
    // Input
    const so = Number(document.getElementById("soHaiChuSo").value);

    // Xử lý
    const hangChuc = Math.floor(so / 10);
    const hangDonVi = so % 10;
    const tongKySo = hangChuc + hangDonVi;

    // Output
    showKetQua(document.getElementById("ketQuaTongKySo"), `Tổng 2 ký số: ${tongKySo}`);
});
