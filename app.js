// 引入必要的插件
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 檢查是否為觸控裝置
if (ScrollTrigger.isTouch !== 1) {

    // 創建 ScrollSmoother 實例，用於平滑滾動效果
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    });

    // 對 '.hero-section' 元素應用淡出效果
    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    });

    // 選取 '.gallery_left' 元素中的每個 '.gallery_item' 元素
    let itemsL = gsap.utils.toArray('.gallery_left .gallery_item');

    // 對每個 '.gallery_item' 元素應用淡入效果和位移效果
    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: -50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        });
    });

    // 選取 '.gallery_right' 元素中的每個 '.gallery_item' 元素
    let itemsR = gsap.utils.toArray('.gallery_right .gallery_item');

    // 對每個 '.gallery_item' 元素應用淡入效果和位移效果
    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			// 設置滾動觸發器（scrollTrigger）的相關參數
			scrollTrigger: {
				trigger: item,  // 觸發滾動效果的元素
				start: '-750',  // 滾動觸發的起始位置（距離觸發元素頂部的距離）
				end: 'top',     // 滾動觸發的結束位置（相對於視窗頂部的距離）
				scrub: true     // 啟用平滑滾動效果
			}
		});
    });
}
