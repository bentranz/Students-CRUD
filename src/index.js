// 1, In ra table danh sách nhân viên

// 2, Thêm nhân viên mới

//  3, Tạo đối tượng  :
// + Tài khoản
// + Họ tên
// + Email
// + Mật khẩu
// + Ngày làm
// + Lương cơ bản
// + Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
// + Giờ làm trong tháng
// + Tổng lương
// + Loại nhân viên

// 4, Validation:
/**
 *  + Tài khoản tối đa 4 - 6 ký số, không để trống
    + Tên nhân viên phải là chữ, không để trống
    + Email phải đúng định dạng, không để trống
    + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
    để trống
    + Ngày làm không để trống, định dạng mm/dd/yyyy
    + Lương cơ bản 1 000 000 - 20 000 000, không để trống
    + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
    + Số giờ làm trong tháng 80 - 200 giờ, không để trống

 */

// 5, Xây dựng phương thức tính lương :
/**
 *  +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
    +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
    +nếu chức vụ là nhân viên: tổng lương = lương cơ bản *
 */

// 6, Xây dựng phương thức xếp loại cho đối tượng nhân viên

/**
 *  +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
    +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
    +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
    +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình

 */

// 7, Xóa nhân viên 

// 8, Cập nhật nhân viên ( có validation)

// 9, Tìm nhân viên theo loại và hiển thị .



/**
 * Start project
 * 
 * Write project product requirements document (PRD)
 * Design
 * Phân rã đối tượng 
 * UI => implement js
 * Testing
 * 
 */

var staffList = [];




function renderStaff(data) {
   // log staffList
   var dataTable = "";

   for(var i = 0 ; i < staffList.length; i++) {
      var currentStaff = staffList[i];
      dataTable += `<tr>
      <th > ${currentStaff.staffId}</th>
      <th> ${currentStaff.fullName}</th>
      <th> ${currentStaff.email}</th>
      <th> ${currentStaff.datepicker}</th>
      <th> ${currentStaff.chucvu}</th>
      <th> ${currentStaff.caclSalary()}</th>
      <th> ${currentStaff.staffType()}</th>
      
    </tr>`;
   }

   document.getElementById("tableDanhSach").innerHTML = dataTable;
}



function CreateStaff() {
   // get input
   var staffId = document.getElementById("tknv").value;
   var fullName = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var datepicker = document.getElementById("datepicker").value;
   var luongCB = document.getElementById("luongCB").value;
   var chucvu = document.getElementById("chucvu").value;
   var gioLam = document.getElementById("gioLam").value;
  
// new staff 
   var newStaff = new Staff(
      staffId,
      fullName,
      email,
      password,
      datepicker,
      luongCB,
      chucvu,
      gioLam,

   );
   console.log(newStaff);

   // push array 
   staffList.push(newStaff);

   renderStaff();

}





