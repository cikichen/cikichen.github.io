// Data Source: Ming Dynasty Huguang Administration & Modern Mapping
// Strictly follows Ming Dynasty Prefectural/County structure
// Based on "Ming Dynasty Huguang Administration Evaluation Table"

const mingData = [
  {
    region: "湖广布政使司",
    city: "长沙府",
    subtitle: "吉王藩封·湘中枢纽",
    counties: [
      { 
        name: "长沙/善化县", 
        ming_gov: "繁剧", 
        ming_folk: "府治双附郭，湘中枢纽，物产丰盈，赋税极其浩繁", 
        modern: "娱乐之都、工程机械之都",
        modern_of: "今属：长沙市开福、天心、芙蓉、雨花、岳麓、望城等区"
      },
      { 
        name: "湘潭县", 
        ming_gov: "繁", 
        ming_folk: "天下药材集散地，商业发达，商贾云集", 
        modern: "伟人故里、动力之都",
        modern_of: "今属：湘潭市湘潭县、雨湖区、岳塘区"
      },
      { 
        name: "湘阴县", 
        ming_gov: "繁", 
        ming_folk: "滨临洞庭，水运枢纽，赋税较繁", 
        modern: "左宗棠故里、藠头",
        modern_of: "今属：岳阳市湘阴县"
      },
      { 
        name: "宁乡县", 
        ming_gov: "繁", 
        ming_folk: "土地平旷，赋税较繁，人文荟萃", 
        modern: "鱼米之乡、青铜文化",
        modern_of: "今属：长沙市宁乡市"
      },
      { 
        name: "浏阳县", 
        ming_gov: "繁", 
        ming_folk: "产花炮、夏布，赋税较繁，商贸活跃", 
        modern: "花炮之乡、将军县",
        modern_of: "今属：长沙市浏阳市"
      },
      { 
        name: "醴陵县", 
        ming_gov: "繁", 
        ming_folk: "产陶瓷、花炮，商贸往来，赋税较繁", 
        modern: "中国瓷都",
        modern_of: "今属：株洲市醴陵市"
      },
      { 
        name: "益阳县", 
        ming_gov: "繁", 
        ming_folk: "资水下游枢纽，土地肥沃，赋税较繁", 
        modern: "羽毛球之乡",
        modern_of: "今属：益阳市赫山区、资阳区"
      },
      { 
        name: "湘乡县", 
        ming_gov: "繁", 
        ming_folk: "地广人稠，赋税较繁，民风劲悍", 
        modern: "湘军摇篮、水泥建材",
        modern_of: "今属：湘潭市湘乡市、韶山市；娄底市双峰县、娄星区"
      },
      { 
        name: "攸县", 
        ming_gov: "简", 
        ming_folk: "地处湘东，俗淳事简", 
        modern: "的士之乡、香干",
        modern_of: "今属：株洲市攸县"
      },
      { 
        name: "安化县", 
        ming_gov: "简", 
        ming_folk: "产黑茶，山多地狭，事简", 
        modern: "黑茶之乡、羽毛球",
        modern_of: "今属：益阳市安化县"
      },
      { 
        name: "茶陵州", 
        ming_gov: "简", 
        ming_folk: "人文名邦，民淳好学，事体稍简", 
        modern: "红色政权诞生地",
        modern_of: "今属：株洲市茶陵县、炎陵县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "常德府",
    subtitle: "武陵要冲·洞庭西户",
    counties: [
      { 
        name: "武陵县", 
        ming_gov: "繁", 
        ming_folk: "府治附郭，洞庭湖西门户，土地膏腴，粮储丰沛", 
        modern: "桃花源里的城市",
        modern_of: "今属：常德市武陵区、鼎城区"
      },
      { 
        name: "桃源县", 
        ming_gov: "简", 
        ming_folk: "桃花源地，山水形胜，俗淳事简", 
        modern: "桃花源",
        modern_of: "今属：常德市桃源县"
      },
      { 
        name: "龙阳县", 
        ming_gov: "繁", 
        ming_folk: "滨临洞庭，水利繁重，赋税较繁", 
        modern: "中华鳖之乡",
        modern_of: "今属：常德市汉寿县"
      },
      { 
        name: "沅江县", 
        ming_gov: "繁", 
        ming_folk: "湖港交错，水利繁重，商旅往来", 
        modern: "水城、芦苇之乡",
        modern_of: "今属：益阳市沅江市"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "岳州府",
    subtitle: "洞庭湖系·江湖锁钥",
    counties: [
      { 
        name: "巴陵县", 
        ming_gov: "冲繁", 
        ming_folk: "府治附郭，洞庭湖口咽喉，驿传接待极其繁忙", 
        modern: "化工城、岳阳楼",
        modern_of: "今属：岳阳市岳阳楼区、云溪区、君山区"
      },
      { 
        name: "临湘县", 
        ming_gov: "繁", 
        ming_folk: "扼守长江，商贸往来，赋税较繁", 
        modern: "浮标之乡",
        modern_of: "今属：岳阳市临湘市"
      },
      { 
        name: "华容县", 
        ming_gov: "繁", 
        ming_folk: "地处湖区，土地肥沃，赋税较繁", 
        modern: "棉粮基地、小龙虾",
        modern_of: "今属：岳阳市华容县"
      },
      { 
        name: "平江县", 
        ming_gov: "简", 
        ming_folk: "地处山区，民淳事简，产茶麻", 
        modern: "将军县、辣条发源地",
        modern_of: "今属：岳阳市平江县"
      },
      { 
        name: "安乡县", 
        ming_gov: "繁", 
        ming_folk: "湖泽之地，水利繁重，赋税较繁", 
        modern: "酱卤美食",
        modern_of: "今属：常德市安乡县"
      },
      { 
        name: "石门县", 
        ming_gov: "简", 
        ming_folk: "地处山区，民淳事简", 
        modern: "柑橘之乡",
        modern_of: "今属：常德市石门县"
      },
      { 
        name: "慈利县", 
        ming_gov: "简", 
        ming_folk: "山多地狭，俗朴事简", 
        modern: "温泉之乡",
        modern_of: "今属：张家界市慈利县"
      },
      { 
        name: "澧州", 
        ming_gov: "繁", 
        ming_folk: "九大水系汇流，水陆枢纽，商贸往来", 
        modern: "城头山遗址",
        modern_of: "今属：常德市澧县、津市市"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "衡州府",
    subtitle: "楚粤门户·两广喉舌",
    counties: [
      { 
        name: "衡阳县", 
        ming_gov: "繁", 
        ming_folk: "府治附郭，扼两广喉舌，商旅往来，俗尚气力", 
        modern: "老工业基地、交通枢纽",
        modern_of: "今属：衡阳市雁峰、石鼓、珠晖、蒸湘、南岳区及衡阳县"
      },
      { 
        name: "衡山县", 
        ming_gov: "冲", 
        ming_folk: "南岳所在地，香火之利，俗颇文秀", 
        modern: "皮影戏",
        modern_of: "今属：衡阳市衡山县、衡东县"
      },
      { 
        name: "耒阳县", 
        ming_gov: "繁", 
        ming_folk: "产石炭(煤)，水运便利，赋税较繁", 
        modern: "油茶之都、能源基地",
        modern_of: "今属：衡阳市耒阳市"
      },
      { 
        name: "常宁县", 
        ming_gov: "简", 
        ming_folk: "瑶汉杂处，山多田少，事简", 
        modern: "有色金属之乡",
        modern_of: "今属：衡阳市常宁市"
      },
      { 
        name: "安仁县", 
        ming_gov: "简", 
        ming_folk: "地僻民淳，事简", 
        modern: "神农故郡",
        modern_of: "今属：郴州市安仁县"
      },
      { 
        name: "酃县", 
        ming_gov: "简", 
        ming_folk: "地僻山深，民风淳朴", 
        modern: "炎帝陵",
        modern_of: "今属：株洲市炎陵县"
      },
      { 
        name: "临武县", 
        ming_gov: "简", 
        ming_folk: "山多田少，产煤炭，事简", 
        modern: "鸭脖之乡",
        modern_of: "今属：郴州市临武县"
      },
      { 
        name: "蓝山县", 
        ming_gov: "简", 
        ming_folk: "地接九疑，山深民朴", 
        modern: "湘江源头",
        modern_of: "今属：永州市蓝山县"
      },
      { 
        name: "新城县", 
        ming_gov: "简", 
        ming_folk: "新置之县，民少事简", 
        modern: "烤烟大县",
        modern_of: "今属：郴州市桂东县"
      },
      { 
        name: "桂阳州", 
        ming_gov: "繁", 
        ming_folk: "产矿冶，商贾辐辏，赋税较繁", 
        modern: "有色金属之乡",
        modern_of: "今属：郴州市桂阳县、嘉禾县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "宝庆府",
    subtitle: "宝庆重镇·苗疆门户",
    counties: [
      { 
        name: "邵阳县", 
        ming_gov: "繁难", 
        ming_folk: "府治附郭，铁打宝庆，性猛喜斗，苗疆门户", 
        modern: "商贾遍天下",
        modern_of: "今属：邵阳市大祥、双清、北塔区及邵阳县、邵东市"
      },
      { 
        name: "新化县", 
        ming_gov: "繁", 
        ming_folk: "梅山腹地，民风剽悍，习武成风", 
        modern: "文印之都",
        modern_of: "今属：娄底市新化县、冷水江市"
      },
      { 
        name: "城步县", 
        ming_gov: "简", 
        ming_folk: "苗疆边隅，易聚难散，事简", 
        modern: "南山牧场",
        modern_of: "今属：邵阳市城步苗族自治县"
      },
      { 
        name: "武冈州", 
        ming_gov: "繁", 
        ming_folk: "小皇城，礼制森严，商贸繁荣", 
        modern: "卤菜之都",
        modern_of: "今属：邵阳市武冈市、新宁县、洞口县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "永州府",
    subtitle: "潇湘源头·岭南北门",
    counties: [
      { 
        name: "零陵县", 
        ming_gov: "繁", 
        ming_folk: "府治附郭，潇湘二水汇合，水运枢纽", 
        modern: "历史文化名城",
        modern_of: "今属：永州市零陵区"
      },
      { 
        name: "祁阳县", 
        ming_gov: "繁", 
        ming_folk: "地广人稠，民风刚悍", 
        modern: "陶铸故里",
        modern_of: "今属：永州市祁阳市、衡阳市祁东县"
      },
      { 
        name: "东安县", 
        ming_gov: "简", 
        ming_folk: "武术之乡，民尚武", 
        modern: "东安鸡",
        modern_of: "今属：永州市东安县"
      },
      { 
        name: "道州", 
        ming_gov: "简", 
        ming_folk: "理学之乡，民淳好学", 
        modern: "周敦颐故里",
        modern_of: "今属：永州市道县"
      },
      { 
        name: "宁远县", 
        ming_gov: "简", 
        ming_folk: "九疑山下，民朴事简", 
        modern: "舜帝陵",
        modern_of: "今属：永州市宁远县"
      },
      { 
        name: "江华县", 
        ming_gov: "简", 
        ming_folk: "瑶汉杂处，地僻事简", 
        modern: "神州瑶都",
        modern_of: "今属：永州市江华瑶族自治县"
      },
      { 
        name: "永明县", 
        ming_gov: "简", 
        ming_folk: "地处山区，民淳事简", 
        modern: "女书文化",
        modern_of: "今属：永州市江永县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "郴州",
    subtitle: "山产矿区·楚粤孔道",
    counties: [
      { 
        name: "郴县", 
        ming_gov: "繁", 
        ming_folk: "州治附郭，楚粤孔道，商旅往来", 
        modern: "有色金属之乡",
        modern_of: "今属：郴州市北湖区、苏仙区"
      },
      { 
        name: "永兴县", 
        ming_gov: "简", 
        ming_folk: "银都，产银冶，事简", 
        modern: "中国银都",
        modern_of: "今属：郴州市永兴县"
      },
      { 
        name: "宜章县", 
        ming_gov: "繁", 
        ming_folk: "岭南门户，关隘重地", 
        modern: "莽山",
        modern_of: "今属：郴州市宜章县"
      },
      { 
        name: "兴宁县", 
        ming_gov: "简", 
        ming_folk: "地僻民淳，事简", 
        modern: "东江湖",
        modern_of: "今属：郴州市资兴市"
      },
      { 
        name: "桂阳县", 
        ming_gov: "简", 
        ming_folk: "非今桂阳县，乃今汝城，民朴", 
        modern: "温泉之乡",
        modern_of: "今属：郴州市汝城县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "辰州府",
    subtitle: "五溪要地·滇黔门户",
    counties: [
      { 
        name: "沅陵县", 
        ming_gov: "繁难", 
        ming_folk: "府治附郭，五溪枢纽，扼守沅水，苗汉杂处", 
        modern: "水能大县",
        modern_of: "今属：怀化市沅陵县"
      },
      { 
        name: "卢溪县", 
        ming_gov: "简", 
        ming_folk: "水畔小邑，民淳事简", 
        modern: "盘瓠文化",
        modern_of: "今属：湘西州泸溪县"
      },
      { 
        name: "辰溪县", 
        ming_gov: "简", 
        ming_folk: "地处山区，产煤铁", 
        modern: "稻花鱼",
        modern_of: "今属：怀化市辰溪县"
      },
      { 
        name: "溆浦县", 
        ming_gov: "繁", 
        ming_folk: "屈原流放地，地广人稠", 
        modern: "辞赋之源",
        modern_of: "今属：怀化市溆浦县"
      },
      { 
        name: "沅州", 
        ming_gov: "繁难", 
        ming_folk: "滇黔门户，商贾云集，苗疆要地", 
        modern: "和平名城",
        modern_of: "今属：怀化市芷江县、洪江市、新晃县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "永定卫",
    subtitle: "卫所军镇·武陵山地",
    counties: [
      { 
        name: "永定卫治", 
        ming_gov: "军管", 
        ming_folk: "卫所军镇，武陵山腹地", 
        modern: "世界自然遗产",
        modern_of: "今属：张家界市永定区"
      },
      { 
        name: "桑植县", 
        ming_gov: "羁縻", 
        ming_folk: "土司辖地，民风淳朴", 
        modern: "民歌之乡",
        modern_of: "今属：张家界市桑植县"
      }
    ]
  },
  {
    region: "湖广布政使司",
    city: "永顺宣慰司",
    subtitle: "土司辖地·苗疆边墙",
    counties: [
      { 
        name: "宣慰司治", 
        ming_gov: "羁縻", 
        ming_folk: "土司世袭，苗疆腹地，不知有官", 
        modern: "猛洞河、芙蓉镇",
        modern_of: "今属：湘西州永顺县"
      },
      { 
        name: "保靖州", 
        ming_gov: "羁縻", 
        ming_folk: "土司辖地，依山为固", 
        modern: "黄金茶",
        modern_of: "今属：湘西州保靖县"
      },
      { 
        name: "乾州", 
        ming_gov: "军/土", 
        ming_folk: "苗疆边墙，军事重镇", 
        modern: "矮寨大桥",
        modern_of: "今属：湘西州吉首市"
      },
      { 
        name: "凤凰营", 
        ming_gov: "军/土", 
        ming_folk: "竿军精锐，边墙要塞", 
        modern: "中国最美小城",
        modern_of: "今属：湘西州凤凰县"
      }
    ]
  }
];

// Export for usage
const hunanData = mingData;
