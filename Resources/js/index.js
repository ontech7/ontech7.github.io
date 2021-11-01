document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("back").onclick = async function() {
        await smoothTransition(true);
        document.getElementById("under-construction").style.display = 'none';
        document.getElementById("home").style.display = 'flex';
        await smoothTransition(false);
    }

    document.getElementById("biography").onclick = async function() {
        await smoothTransition(true);
        document.getElementById("home").style.display = 'none';
        document.getElementById("under-construction").style.display = 'flex';
        await smoothTransition(false);
    }

    document.getElementById("curriculum").onclick = async function() {
        await smoothTransition(true);
        document.getElementById("home").style.display = 'none';
        document.getElementById("under-construction").style.display = 'flex';
        await smoothTransition(false);
    }

    document.getElementById("projects").onclick = async function() {
        await smoothTransition(true);
        document.getElementById("home").style.display = 'none';
        document.getElementById("under-construction").style.display = 'flex';
        await smoothTransition(false);
    }
});

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