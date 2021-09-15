let div1 = dom.create('<div>1</div>')
let div2 = dom.create('<div>2</div>')
let div3 = dom.create('<div>3</div>')

dom.after(test,div1)
dom.before(test,div2)
dom.append(test,div3)

let nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test,'title','woaini')
let title = dom.attr(test,'title')
console.log(`title:${title}`)

dom.text(test,'woyizhiaini')
dom.text(test)

dom.html(test,'<p>123</p>')
dom.html(test)

dom.style(test,{border:'1px solid red',color:'blue'})
console.log(dom.style(test,'border'))
dom.style(test,'border','1px solid black')

dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'blue')
console.log(dom.class.has(test,'blue'))

let fn = ()=>{
  console.log('点击了')
}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

let testDiv = dom.find('#test')[0]
console.log(testDiv)
let test2 = dom.find('#test2')[0]
console.log(dom.find('.red',test2)[0])

console.log(dom.parent(test))

let s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

let t = dom.find('travel')[0]
dom.each(dom.children(t),(n)=>{dom.style(n,'color','green')})

console.log(dom.index(s2))