const showPass = document.getElementById("pass");
const copyBtn = document.querySelector('[data-id="copyClipboard"]');

/* Function to generate combination of password */
generateP = () => {
    var pass = '';
    const uc = document.querySelector('[data-name="uppercase"]');
    const lc = document.querySelector('[data-name="lowercase"]');
    const sc = document.querySelector('[data-name="specialChars"]');
    const nm = document.querySelector('[data-name="num"]');
    const len = document.querySelector('[data-length]').value;

    const data = [];
    const ofec = [];

    if (uc.checked == true) {
        var u = uc.value;
        var gu = '';
        for (i = 0; i < 1; i++) {
            var uv = Math.floor(Math.random()
                        * u.length);
            gu += u.charAt(uv)
        }
        data.push(u)
        ofec.push(gu)
    }

    if (lc.checked == true) {
        var l = lc.value;
        var gl = '';
        for (i = 0; i < 1; i++) {
            var lv = Math.floor(Math.random()
                        * l.length);
            gl += l.charAt(lv)
        }
        data.push(l)
        ofec.push(gl)
    }

    if (sc.checked == true) {
        var s = sc.value;
        var gs = '';
        for (i = 0; i < 1; i++) {
            var sv = Math.floor(Math.random()
                        * s.length);
            gs += s.charAt(sv)
        }
        data.push(s)
        ofec.push(gs)
    }

    if (nm.checked == true) {
        var n = nm.value;
        var gn = '';
        for (i = 0; i < 1; i++) {
            var nv = Math.floor(Math.random()
                        * n.length);
            gn += n.charAt(nv)
        }
        data.push(n)
        ofec.push(gn)
    }

    var dataString = '';

    for(i in data) {
        dataString += data[i];
    }
    
    const str = dataString;

    const ccc = ofec.length;

    for (i = 0; i < len - ccc; i++) {
        var char = Math.floor(Math.random()
                    * str.length);
        pass += str.charAt(char)
    }

    var oneOfEach = '';

    for (i in ofec) {
        oneOfEach += ofec[i];
    }

    var preparePass = pass + oneOfEach;

    let finalPass = preparePass.split('');
    
    finalPass.sort(() => {
        return 0.5 - Math.random() 
    });

    return finalPass.join('');
}

run = () => {
    showPass.value = generateP();
    copyBtn.disabled = false;
}

copy = () => {
    showPass.select();
    navigator.clipboard.writeText(showPass.value);
    copyBtn.textContent = "Copied...";
    copyBtn.style.backgroundColor = "green";
    // copyBtn.style.borderColor = "#FF5733";
    copyBtn.style.border = "none";
    copyBtn.style.color = "#fff";
    setTimeout(() => {
        copyBtn.textContent= "Copy";
        copyBtn.style.backgroundColor = "transparent";
        copyBtn.style.border = "1px solid gray";
        copyBtn.style.color = "#000";
        setTimeout(() => {
            showPass.blur();
            showPass.value = '';
        }, 27000)
    }, 3000);
}