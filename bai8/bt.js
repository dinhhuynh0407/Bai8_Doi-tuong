// 1.Tạo đối tượng thuVien
const thuVien = {
    //Tạo thuộc tính danhSachSach
    danhSachSach: [],
  
    // 2.Tạo phương thức themSach
    themSach: function (tieuDe, tacGia, namXuatBan) {
      //Tạo một đối tượng mới là sach với các thông tin
      const sach = {
        tieuDe: tieuDe,
        tacGia: tacGia,
        namXuatBan: namXuatBan,
        daMuon: false,
      };
  
      //Đẩy thông tin của đối tượng sach vào thuộc tính danhSachSach
      this.danhSachSach.push(sach);
      console.log(`Đã thêm sách có tiêu đề: ${tieuDe}`); //In thông tin
    },
  
    // 3.Tạo phương thức timSach
    timSach: function (tieuDe) {
      //Tạo đối tượng sach để duyệt qua danhSachSach để kiểm tra tiêu đề
      const sach = this.danhSachSach.find((found) => found.tieuDe === tieuDe);
      if (sach) return sach; //Tìm thấy thì trả về giá trị sach
      else return null; //Không tìm thấy thì trả về giá trị null
    },
  
    // 4.Tạo phương thức muonSach
    muonSach: function (tieuDe) {
      //Tạo đối tượng sach để gán giá trị đã trả về trong phương thức timSach
      const sach = this.timSach(tieuDe);
  
      //Kiểm tra trạng thái của sách đang tìm
      //Nếu sách chưa được mượn thì đổi trạng thái của sách đó
      if (sach.daMuon === false) {
        sach.daMuon = true;
        console.log(`Mượn thành công sách có tiêu đề: ${sach.tieuDe}`); //In thông tin
      }
      //Nếu sách đã được mượn thì không đổi trạng thái của sách đó
      else {
        console.log("Sách đã được mượn!"); //In thông tin
      }
    },
  };

