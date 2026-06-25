
const products = Array.from({length:10},(_,i)=>({
name:`DentiPlus ${i+1}`,
price:(2500+i*250)+' FCFA'
}));

const container=document.getElementById('products');

products.forEach(p=>{
container.innerHTML += `
<div class="card">
<h3>${p.name}</h3>
<p>Dentifrice haute protection.</p>
<p class="price">${p.price}</p>
<a class="btn" target="_blank"
href="https://wa.me/22890452998?text=Bonjour%20DentiPlus,%20je%20souhaite%20commander%20${encodeURIComponent(p.name)}">
Commander
</a>
</div>`;
});
