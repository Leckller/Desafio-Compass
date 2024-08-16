(() => {
  const e = '/build/'; class t {constructor(e) { this.avaliacao = e.avaliacao, this.comentario = e.comentario, this.nome = e.nome, this.verificado = e.verificado; }} const a = new t({ avaliacao: 5, nome: 'Sarah M.', comentario: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”", verificado: !0 }); const o = [a, a, new t({ avaliacao: 5, nome: 'Alex K.', comentario: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”', verificado: !0 }), new t({ avaliacao: 5, nome: 'James L.', comentario: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”", verificado: !0 }), new t({ avaliacao: 5, nome: 'Mooen', comentario: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”", verificado: !0 })]; const n = `${e}b1d6c7906841b8af8935.svg`; const c = `${e}07158a751cb6ff8ad726.svg`; const i = `${e}5bedf0c3f466cdaaa786.svg`; const s = function (e) { const t = document.createElement('article'); t.classList.add('roupa'); const a = document.createElement('img'); a.alt = e.nome, a.src = `.${e.img}`; const o = document.createElement('h3'); o.textContent = e.nome; const i = document.createElement('div'); i.classList.add('avaliacao'); for (let t = 0; t < e.avaliacao; t++) { const a = document.createElement('img'); a.src = e.avaliacao - t == 0.5 ? `.${c}` : `.${n}`, a.alt = 'Star', i.appendChild(a); } const s = document.createElement('p'); s.textContent = `${e.avaliacao.toString()}`, i.appendChild(s); const r = document.createElement('article'); r.classList.add('precos'); const d = document.createElement('p'); if (d.textContent = (e.preco * e.desconto).toFixed(0).toString(), d.classList.add('preco'), r.appendChild(d), e.desconto !== 1) { const t = document.createElement('p'); t.classList.add('DescontoTotal'), t.textContent = e.preco.toString(), r.appendChild(t); const a = document.createElement('p'); a.textContent = (100 - 100 * e.desconto).toString(), a.classList.add('desconto'), r.appendChild(a); } return t.appendChild(a), t.appendChild(o), t.appendChild(i), t.appendChild(r), t; }; class r {constructor(e) { this.avaliacao = e.avaliacao, this.nome = e.nome, this.img = e.img, this.preco = e.preco, this.desconto = e.desconto; }} const d = { camisaCinza: `.${e}c66d36ff03966f06bacd.svg`, CheckeredShirt: `.${e}a6443a2a0f0cffdaa5a1.svg`, SkinnyFitJeans: `.${e}9e126e77dafcee54b69d.svg`, SleeveStripedTshirt: `.${e}acb0123a68912e9e87e0.svg` }; const l = { VerticalStripedShirt: `.${e}4ee180fa67a126039a4b.svg`, CourageGraphicTshirt: `.${e}e410419bffd0d376031b.svg`, FadedSkinnyJeans: `.${e}a346299c236fa9c0fe27.svg`, LooseFitBermudaShorts: `.${e}8cbc44f228e4a20d74dc.svg` }; const m = { arrivals: [new r({ img: d.camisaCinza, avaliacao: 4.5, nome: 'T-shirt with Tape Details', preco: 120, desconto: 1 }), new r({ img: d.SkinnyFitJeans, avaliacao: 3.5, nome: 'Skinny Fit Jeans', preco: 240, desconto: 0.8 }), new r({ img: d.CheckeredShirt, avaliacao: 4.5, nome: 'Checkered Shirt', preco: 180, desconto: 1 }), new r({ img: d.SleeveStripedTshirt, avaliacao: 4.5, nome: 'Sleeve Striped T-shirt', preco: 130, desconto: 0.7 })], topSeeling: [new r({ img: l.VerticalStripedShirt, avaliacao: 5, nome: 'Vertical Striped Shirt', preco: 212, desconto: 0.8 }), new r({ img: l.CourageGraphicTshirt, avaliacao: 4, nome: 'Courage Graphic T-shirt', preco: 145, desconto: 1 }), new r({ img: l.LooseFitBermudaShorts, avaliacao: 3, nome: 'Loose Fit Bermuda Shorts', preco: 80, desconto: 1 }), new r({ img: l.FadedSkinnyJeans, avaliacao: 4.5, nome: 'Faded Skinny Jeans', preco: 210, desconto: 1 })] }; const h = document.querySelector('#ArrivalsContent'); const p = document.querySelector('#TopSeelingContent'); m.arrivals.forEach(((e) => { const t = s(e); h.appendChild(t); })), m.topSeeling.forEach(((e) => { const t = s(e); p.appendChild(t); })); const v = document.querySelector('.sectionCard'); o.forEach(((e) => { const t = (function (e) { const t = document.createElement('article'); t.classList.add('card'); const a = document.createElement('div'); a.classList.add('avaliacao'); for (let t = 0; t < e.avaliacao; t++) { const o = document.createElement('img'); o.src = e.avaliacao - t == 0.5 ? `.${c}` : `.${n}`, o.alt = 'Star', a.appendChild(o); } const o = document.createElement('article'); o.classList.add('TitleBox'); const s = document.createElement('h3'); s.textContent = e.nome; const r = document.createElement('img'); r.src = `.${i}`, r.alt = 'Usuário verificado', o.appendChild(s), o.appendChild(r); const d = document.createElement('p'); return d.textContent = e.comentario, t.appendChild(a), t.appendChild(o), t.appendChild(d), t; }(e)); v.appendChild(t); }));
})();
