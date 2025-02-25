
/* button move top*/
window.onscroll = function() { showScrollButton() };

function showScrollButton() {
    let btn = document.getElementById("moveTopBtn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btn.classList.add("show"); // Thêm class để hiện ra
    } else {
        btn.classList.remove("show"); // Bỏ class để ẩn đi
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = {
            name: btn.getAttribute("data-name"),
            price: parseFloat(btn.getAttribute("data-price")),
            quantity: 1
        };

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        let existing = cart.find(item => item.name === product.name);
        if (existing) {
            existing.quantity += 1; // Tăng số lượng nếu đã có
        } else {
            cart.push(product); // Thêm mới nếu chưa có
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Giỏ hàng:", cart);
    });
});
