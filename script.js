var images;


images = ['https://images.unsplash.com/photo-1573496547376-81418527a728?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1573495627094-cbfef909a47b?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1692241091775-52e2ed6817ba?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
let element_img = document.getElementById('img');
element_img.setAttribute("src", images[0]);


document.getElementById('next_btn').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  images.push(images.shift());
  element_img2.setAttribute("src", images[0]);

});

document.getElementById('previous_btn').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  images.unshift(images.pop());
  element_img3.setAttribute("src", images[0]);

});