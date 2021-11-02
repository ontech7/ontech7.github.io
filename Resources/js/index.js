$(function() {
    $.fn.showFlex = function() {
        this.css('display', 'flex');
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function smoothTransition(isForward) {
        if (isForward) {
            document.body.style.transition = 'all .2s ease-in';
            document.body.style.filter = 'blur(6px)';
            await sleep(200);
        } else {
            await sleep(200);
            document.body.style.transition = 'all .2s ease-out';
            document.body.style.filter = 'none';
        }
    }

    $(".back-btn").on('click', async function() {
        var idSection = $(this).closest('.body-container').prop('id');

        await smoothTransition(true);
        $("#" + idSection).hide();
        $("#home").showFlex();
        await smoothTransition(false);
    });

    $("#biography").on('click', async function() {
        await smoothTransition(true);
        $("#home").hide();
        $("#under-construction").showFlex();
        await smoothTransition(false);
    })

    $("#curriculum").on('click', async function() {
        await smoothTransition(true);
        $("#home").hide();
        $("#curriculum-section").showFlex();
        await smoothTransition(false);
    });

    $("#projects").on('click', async function() {
        await smoothTransition(true);
        $("#home").hide();
        $("#under-construction").showFlex();
        await smoothTransition(false);
    });
});