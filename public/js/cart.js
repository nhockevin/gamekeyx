document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.querySelector("#cart-body"); // Giả sử bạn có tbody id="cart-body"
    let totalPrice = 0;

    cartContainer.innerHTML = ""; // Xóa nội dung cũ
    cart.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}đ</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toLocaleString()}đ</td>
                <td><button class="remove-item" data-index="${index}">Xóa</button></td>
            </tr>
        `;
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += row;
    });

    document.querySelector("#total-price").innerText = totalPrice.toLocaleString() + "đ";

    // Xóa sản phẩm khỏi giỏ hàng
    document.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("data-index");
            cart.splice(index, 1); // Xóa phần tử khỏi mảng
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Load lại trang để cập nhật
        });
    });

    // Xóa tất cả
    document.querySelector("#clear-cart").addEventListener("click", () => {
        localStorage.removeItem("cart");
        location.reload();
    });
});



//test

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Nếu giỏ hàng rỗng, thêm sản phẩm mẫu
    if (cart.length === 0) {
        cart = [
            {
                name: "Cyberpunk 2077",
                price: 799000,
                quantity: 1
            }
        ];
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    let cartContainer = document.querySelector("#cart-items");
    let totalPrice = 0;

    cartContainer.innerHTML = ""; // Xóa nội dung cũ
    cart.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}đ</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toLocaleString()}đ</td>
                <td><button class="remove-item" data-index="${index}">Xóa</button></td>
            </tr>
        `;
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += row;
    });

    document.querySelector("#total-price").innerText = totalPrice.toLocaleString() + "đ";

    // Xóa sản phẩm
    document.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        });
    });

    // Xóa toàn bộ giỏ hàng
    document.querySelector("button[onclick='clearCart()']").addEventListener("click", () => {
        localStorage.removeItem("cart");
        location.reload();
    });
});
