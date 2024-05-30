const src = {
  // pick imgs from the dom

  allImgs: [],
  allImgsDom: document.querySelectorAll(".main-window-imgs"),
  allVideosDom: document.querySelectorAll(".main-window-videos"),

  // ! new added
  allQsDom: document.querySelectorAll(".qs"),


  set() {
    let index = 0;
    this.allItems = {

      // !Template images
      arrowRound: this.allImgsDom[index++],
      blinkArrow: this.allImgsDom[index++],
      laerrow: this.allImgsDom[index++],
      laerrow2: this.allImgsDom[index++],
      logo: this.allImgsDom[index++],
      man: this.allImgsDom[index++],
      measurearrow: this.allImgsDom[index++],
      measurearrow2: this.allImgsDom[index++],
      redsize: this.allImgsDom[index++],                                         
      speech_off_btn: this.allImgsDom[index++],
      speech_on_btn: this.allImgsDom[index++],
      talk_cloud: this.allImgsDom[index++],
      iit_delhi_logo: this.allImgsDom[index++],
      // !Template images end

      // ! Procedure formula Nomenclature images 
      formulas_component_stress:this.allImgsDom[index++],
      formulas_efficiency:this.allImgsDom[index++],
      formulas_ideal:this.allImgsDom[index++],
      formulas_nomenclautre:this.allImgsDom[index++],
      formulas_non_ideal:this.allImgsDom[index++],
      formulas_procedure:this.allImgsDom[index++],
      formulas_universal:this.allImgsDom[index++],
      // ! Procedure formula Nomenclature images end

      //! EE13 images added here
      
      btn_check:this.allImgsDom[index++],
      btn_delete:this.allImgsDom[index++],
      btn_next_mode:this.allImgsDom[index++],
      btn_record:this.allImgsDom[index++],
      btn_reset:this.allImgsDom[index++],
      btn_reset_3:this.allImgsDom[index++],
      btn_restart_operation:this.allImgsDom[index++],
      option_1_tab_1:this.allImgsDom[index++],
      option_1_tab_2:this.allImgsDom[index++],
      option_1_tab_3:this.allImgsDom[index++],
      option_1_tab_4:this.allImgsDom[index++],
      option_1_tab_5:this.allImgsDom[index++],
      part_1_components:this.allImgsDom[index++],
      part_2_components:this.allImgsDom[index++],
      part_3_circuit:this.allImgsDom[index++],
      part_3_option_1_alpha_vs:this.allImgsDom[index++],
      part_3_option_1_load_1:this.allImgsDom[index++],
      part_3_option_1_load_2:this.allImgsDom[index++],
      big_helper:this.allImgsDom[index++],
      helper_1:this.allImgsDom[index++],
      helper_2:this.allImgsDom[index++],
      helper_3:this.allImgsDom[index++],
      helper_4:this.allImgsDom[index++],
      helper_5:this.allImgsDom[index++],
      helper_6:this.allImgsDom[index++],
      btn_proceed:this.allImgsDom[index++],
      
      //! EE13 images end here



      // * Question Mark
      domQs1: this.allQsDom[0],
      domQs2: this.allQsDom[1],
      domQs3: this.allQsDom[2],
      domQs4: this.allQsDom[3],
      domQs5: this.allQsDom[4],
      domQs6: this.allQsDom[5],
      
      
      // * Videos
      // yoke_front_to_back: this.allVideosDom[0],
      // yoke_front_to_side: this.allVideosDom[1],
      // panel1: this.allVideosDom[2],
      // panel2: this.allVideosDom[3],

      bfs_video: this.allVideosDom[0],
    };
  },
  allImgsInitialAxis: [],
  get(itemName) {
    return this.allItems[itemName];
  },
};
// setting src
src.set();
