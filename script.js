const changeto = 'Ваш аккаунт был заблокирован без возможности аппеляции.';

    function change(){

        const every = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'input', 'textarea', 'a', 'x-row', 'x-fold', 'button', 'pre', 'td', 'label', 'div', 'strong', 'b', 'code', 'em', 'li', 'ol']

        every.forEach((el, i) => {
            var elements = document.getElementsByTagName(el);
            var elementsArray = Array.from(elements);
            elementsArray.forEach((element, index) => {

                try{

                    element.placeholder = changeto;
                    element.ariaLabel = changeto;
                    element.value = changeto;

                    var tempel = document.createElement(el);
                    tempel.innerHTML = element.innerHTML;

                    tempel.childNodes.forEach(function(node) {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = changeto;
                        } else if (node.nodeType === Node.ELEMENT_NODE) {

                            node.childNodes.forEach(function(childNode) {
                                if (childNode.nodeType === Node.TEXT_NODE) {
                                    childNode.textContent = changeto;
                                }
                            })
                        }
                    });

                    element.innerHTML = tempel.innerHTML;
                }catch {}
                
            });
        });

        setTimeout(change, 500);

    };

    change();
