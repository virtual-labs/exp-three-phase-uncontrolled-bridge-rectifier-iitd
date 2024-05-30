const sliders = {
    slider_V_value: 0,
    v: document.querySelector(".v .value-box input"),
    v_knob: document.querySelector(".slider-V-arrow"),
    sliderV(afterClickCallback=null){
        let sliderArrow = document.querySelector(".slider-V-arrow")
        let sliderValueInput = document.querySelector(".v .value-box input")
        let minAngle = 0
        let maxAngle = 332
        let angleDifference = 29.8
        let angles = minAngle
        let minValue = 0
        let maxValue = 440
        let valueDifference = 1
        let value = minValue
        let singleClickDiff = 40
        let doubleClickDiff = 20

        function incrementAngleAndValue(isDoubleClick = false){
            if(isDoubleClick){
                angles = angles + angleDifference + (20 * 1.5)
                if(angles > maxAngle){
                    angles = minAngle
                }

                value = value + doubleClickDiff
                if(value > maxValue){
                    value = minValue
                }
            }else{
                angles = angles + angleDifference 
                if(angles > maxAngle){
                    angles = minAngle
                }

                value = value + singleClickDiff
                if(value > maxValue){
                    value = minValue
                }
            }

        }
        
        // slider function on single click 
        let rotateArrowSingleClick = (rot=0)=>{
            incrementAngleAndValue()
            sliderArrow.style.transform=`rotate(${angles}deg)`
            console.log(value)
            sliderValueInput.value = value
        }


        // * for input value
        const slideInput = ()=>{
            let val = Number(sliderValueInput.value)
            if(val > maxValue){
                val = maxValue
            }
            if(val >= 50){
                angles = val * 1.5
                sliderArrow.style.transform=`rotate(${angles}deg)`
                sliderValueInput.value = val
                value = val
                console.log("val:",val)
            }
        }

        sliderValueInput.onkeyup = slideInput
        sliderValueInput.addEventListener("focusout",()=>{
            if(sliderValueInput.value < minValue){
                sliderValueInput.value = minValue
            }
            slideInput()
        })
        
        sliderArrow.onclick = ()=>{
            rotateArrowSingleClick()
            // ! call back for arrow etc
            if(afterClickCallback)
                afterClickCallback()
        }
    },
    init(){
        this.sliderV()
    },
    resetSlidersValue(){
        document.querySelector(".slider-V-arrow").style.transform=`rotate(${0}deg)`
        document.querySelector(".v .value-box input").value = 0
    },
    showAllSliders(){
        let sliders = document.querySelectorAll(".slider .slider-box")
        sliders.forEach((ele)=>{
            ele.style.display = "block"
        })
    },
    showAll(){
        let sliderBox = document.querySelector(".universal-slider")
        sliderBox.style.display = "block"
    },
    hideAll(){
        let sliderBox = document.querySelector(".universal-slider")
        sliderBox.style.display = "none"
    },
    showSlider(sliderName="",second=""){
        this.showAll()
        let sliders = document.querySelectorAll(".slider .slider-box")
        sliders.forEach((ele)=>{
            ele.style.display = "none"
        })
        document.querySelector(`.slider .${sliderName}`).style.display = "block"
        if(second!="")
            document.querySelector(`.slider .${second}`).style.display = "block"
    },
    hideSlider(sliderName=""){
        this.showAll()
        // document.querySelector(".slider-circuit").style.display = "none"
        let sliders = document.querySelectorAll(".slider .slider-box")
        sliders.forEach((ele)=>{
            ele.style.display = "block"
        })
        document.querySelector(`.slider .${sliderName}`).style.display = "none"
    }
}

sliders.init()



/*
use it like showSlider(sliderName)
like: d, v, r -> only those sliders are visible

and for all visible call
sliders.showAll()
*/