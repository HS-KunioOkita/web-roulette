const OdaiCards = {
  data() {
    return {
      items: [
        { message: '好きな食べ物/嫌いな食べ物', selected: false },
        { message: '最近ハマっていること', selected: false  },
        { message: '休日の過ごし方', selected: false  },
        { message: '趣味・特技', selected: false  },
        { message: '好きな芸能人/有名人/歴史上の人物', selected: false  },
        { message: '最近買ったもの', selected: false  },
        { message: '健康法/ストレス解消法', selected: false  },
        { message: '好きな映画', selected: false  },
        { message: '好きな本', selected: false  },
        { message: '好きな漫画', selected: false  },
        { message: '好きな音楽', selected: false  },
        { message: '好きな季節', selected: false  },
        { message: '好きな場所（国内外）', selected: false  },
        { message: '最近うれしかったこと', selected: false  },
        { message: '宝くじで100万円あたったら？', selected: false  },
        { message: '今住んでいる街について', selected: false  }
      ]
    }
  },
  methods: {
    selectOdai() {
      this.interval = setInterval(() => {
        // リセット
        this.items.map(function(item){
          item.selected = false
          return item
        });
        // ランダムにお題を選択
        while(true) {
          selectedIndex = Math.floor(Math.random() * this.items.length)
          if (this.currentIndex !== selectedIndex) {
            this.items[selectedIndex].selected = true
            this.currentIndex = selectedIndex
            break
          }
        }
      }, 100)
    },
    stopSelectOdai() {
      clearInterval(this.interval)
    }
  }
}

Vue.createApp(OdaiCards).mount('#odai-cards')
