const ul = document.querySelector("#slider > ul");
const slideList = document.querySelectorAll("#slider > ul > li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const nav = document.querySelectorAll("nav li");

let enableClick = true;
let slideIndex = 0;

// next 버튼을 클릭했을 때
next.addEventListener("click", (e) => {
    e.preventDefault();
    setIndex(slideIndex + 1);

    if (enableClick) {
        enableClick = false;
        new Anime(ul, {
            prop: "margin-left",
            value: `${slideIndex * -100}%`,
            duration: 500,
            callback: () => {
                enableClick = true;
                imgAni();
            },
        });
    }
});

// prev 버튼을 클릭했을 떄
prev.addEventListener("click", (e) => {
    e.preventDefault();
    setIndex(slideIndex - 1);
    if (enableClick) {
        enableClick = false;
        new Anime(ul, {
            prop: "margin-left",
            value: `${slideIndex * -100}%`,
            duration: 500,
            callback: () => {
                enableClick = true;
                imgAni();
            },
        });
    }
});

// nav버튼을 클릭했을 때
nav.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const navIndex = Number(e.currentTarget.dataset.index);
        setIndex(navIndex);
        if (enableClick) {
            enableClick = false;
            new Anime(ul, {
                prop: "margin-left",
                value: `-${navIndex * 100}%`,
                duration: 500,
                callback: () => {
                    enableClick = true;
                    imgAni();
                },
            });
        }
    });
});

// 슬라이드의 인덱스를 체크하여 클래스 추가
const setIndex = (nextIndex) => {
    if (nextIndex >= slideList.length) {
        nextIndex = 0;
    } else if (nextIndex < 0) {
        nextIndex = slideList.length - 1;
    }
    slideIndex = nextIndex;
    slideList.forEach((el, index) => {
        index === slideIndex ? el.classList.add("on") : el.classList.remove("on");
    });
    nav.forEach((el, index) => {
        index === slideIndex ? el.classList.add("on") : el.classList.remove("on");
    });
};

// 해당 슬라이드를 클릭했을 때 closets, doremi 이미지에 클래스 ani추가
const imgAni = () => {
    if (window.innerWidth <= 768) {
        if (slideList[2].classList.contains("on")) slideList[2].classList.add("ani");
        else slideList[2].classList.remove("ani");
        if (slideList[3].classList.contains("on")) slideList[3].classList.add("ani");
        else slideList[3].classList.remove("ani");
    }
};
