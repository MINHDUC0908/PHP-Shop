const imPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
const dotLeft = document.querySelector(".fa-chevron-left");
const dotRight = document.querySelector(".fa-chevron-right");
let index = 0;
let number = imPosition.length;
let isSliding = false; // Biến kiểm tra hiệu ứng chuyển đổi đang diễn ra

// Thiết lập vị trí ban đầu cho từng ảnh và thêm sự kiện click cho chấm chỉ mục và mũi tên
imPosition.forEach(function (image, idx) {
  image.style.left = idx * 100 + "%";
});

dotItem.forEach(function (dot, idx) {
  dot.addEventListener("click", function () {
    if (!isSliding) {
      slider(idx);
    }
  });
});

dotLeft.addEventListener("click", function () {
  if (!isSliding) {
    index--;
    if (index < 0) {
      index = number - 1;
    }
    slider(index);
  }
});

dotRight.addEventListener("click", function () {
  if (!isSliding) {
    index++;
    if (index >= number) {
      index = 0;
    }
    slider(index);
  }
});

// Hàm chuyển đổi ảnh
function slider(index) {
  // Bắt đầu hiệu ứng chuyển đổi
  isSliding = true;

  // Dịch chuyển container hình ảnh
  var translateXValue = -index * 100 + "%";
  imContainer.style.transform = "translateX(" + translateXValue + ")";

  // Gán giá trị chỉ số mới
  currentIndex = index;

  // Kết thúc hiệu ứng chuyển đổi sau 500ms
  setTimeout(function () {
    isSliding = false;
  }, 500);
}

// Hàm tự động chuyển đổi ảnh
function autoSlide() {
  if (!isSliding) {
    index++;
    if (index >= number) {
      index = 0;
    }
    slider(index);
  }
}

// Bắt đầu chạy ảnh tự động khi trang được tải
setInterval(autoSlide, 5000);