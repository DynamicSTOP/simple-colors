## Simple colors

Just as it's called. It escapes strings according to [this](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_(Select_Graphic_Rendition)_parameters) ASCI list making it look colored.  

e.g.

```javascript
require("simple-colors").updateMarkup({
    error:(str)=>{ return str.RGB(255,30,30).reversedVideo;},
    warning:(str)=>{ return str.RGB(241,131,28).reversedVideo;},
    time:(str)=>{ return str.RGB(160,200,0);},
    screen:(str)=>{return str.RGB(241,164,20)},
    network:(str)=>{return str.RGB(241,6,220)},
    debug:(str)=>{return str.RGB(66,156,241)}
});


console.log(`this is error string example`.error + ` normal`);
console.log(`this is warning string example`.warning + ` normal`);
console.log(new Date().toString().time + ` normal`);
console.log(`detected port screen`.screen + ` normal`);
console.log(`new packet received`.network + ` normal`);
console.log(`debug info`.debug + ` normal`);

```

![image](https://i.imgur.com/b2QKsOM.png)


#### Available codes

**bold**, **italic**, **underline**, **crossed**, **reversedVideo** as properties. See **reversedVideo** example above.  

**RGB**, **fgRGB** as functions. fgRGB sets background color. See RGB example above.  

#### P.S. Want something fun?
```javascript
require("simple-colors");
let r=0;g=0;b=0;
const styles = ["","bold","italic","crossed","underline","reversedVideo"];
while(r<=255){
    while(g<=255){
        let str = ``;
        while(b<=255){
            let s = `${r}:${g}:${b}`,a=0;
            while(Math.random()>=0.5 && a++<3){
                const i = Math.floor(Math.random()*styles.length);
                if(i>0)s = s[styles[i]];
            }
            if(Math.random()%2) s = s.RGB(r,g,b);
            if(Math.random()%5) s = s.fgRGB(255-r,255-g,255-b);
            str+=`${s}\t`;
            b+=20;
        }
        console.log(str);
        b=0;
        g+=20;
    }
    g=0;
    r+=20;
}

```