/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Game scene
 */
class EasyLvlOneGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlOneGameScene" })
    
    this.levelOneBackgroundImage = null
  }

  /**
   * init program
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#101E4A")
  }

  /**
   * preload program
   */
  preload() {
    console.log("Easy Mode Level One Game Scene")
    this.load.image("levelOneBackground", "./assets/levelOneBackground.png")
  }

  /**
   * create program
   */
  create(data) {
    this.levelOneBackgroundImage = this.add.sprite(0, 0, "levelOneBackground")
    this.levelOneBackgroundImage.x = 1920 / 2
    this.levelOneBackgroundImage.y = 1080 / 2
  }

  /**
   * update program
   */
  update(time, delta) {}
}

export default EasyLvlOneGameScene
