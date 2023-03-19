var currentDate = new Date();
var targetDate = new Date("2029-03-20");

// Tính thời gian còn lại đến ngày cần đếm ngược đến
var timeRemaining = targetDate.getTime() - currentDate.getTime();

// Tính số ngày, giờ, phút, giây còn lại
var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
var hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
var secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

// Cập nhật thời gian đếm ngược trên giao diện
setInterval(function() {
    // Giảm số giây còn lại mỗi giây
    secondsRemaining--;

    // Kiểm tra nếu đã hết thời gian đếm ngược
    if (secondsRemaining < 0) {
        clearInterval();
        // Thông báo hoặc thực hiện hành động khi đếm ngược kết thúc
    } else {
        // Cập nhật số ngày, giờ, phút, giây còn lại trên giao diện
        $("#countdown").text(daysRemaining + " ngày " + hoursRemaining + " giờ " + minutesRemaining + " phút " + secondsRemaining + " giây");
    }
}, 1000);