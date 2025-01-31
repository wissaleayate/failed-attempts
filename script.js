
    document.querySelectorAll('.links-container').forEach(link => {
        link.addEventListener('click', function () {
         if (this.id === 'mazal') {
            alert('This content is not available currently');
         }
        });
    });


