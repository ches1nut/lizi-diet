/**
 * 内置食物营养数据库
 * 单位：每 100g 可食部
 * 字段：name 名称 | category 分类 | kcal 热量(kcal) | protein 蛋白质(g) | carb 碳水(g) | fat 脂肪(g)
 *
 * 数据来源说明：
 * 数值参考《中国食物成分表》(杨月欣 主编，第6版) 及 USDA FoodData Central 公开数据，
 * 均为常见食物的典型值（可能因品种/烹饪方式有差异），仅供膳食规划参考，非医疗建议。
 * 后续可替换为公开 API 或用户本地录入数据。
 */
const FOODS = [
  // ---- 主食/谷物 ----
  { name: "米饭（熟）", category: "主食", kcal: 116, protein: 2.6, carb: 25.9, fat: 0.3 },
  { name: "馒头", category: "主食", kcal: 223, protein: 7.0, carb: 47.0, fat: 1.1 },
  { name: "全麦面包", category: "主食", kcal: 246, protein: 8.5, carb: 41.0, fat: 3.0 },
  { name: "白面包", category: "主食", kcal: 265, protein: 9.0, carb: 49.0, fat: 3.2 },
  { name: "燕麦片（干）", category: "主食", kcal: 367, protein: 15.0, carb: 61.0, fat: 6.7 },
  { name: "红薯（熟）", category: "主食", kcal: 90, protein: 1.4, carb: 20.7, fat: 0.2 },
  { name: "紫薯（熟）", category: "主食", kcal: 82, protein: 1.6, carb: 18.9, fat: 0.2 },
  { name: "土豆（熟）", category: "主食", kcal: 77, protein: 2.0, carb: 17.2, fat: 0.1 },
  { name: "玉米（熟）", category: "主食", kcal: 112, protein: 4.0, carb: 22.8, fat: 1.2 },
  { name: "意大利面（熟）", category: "主食", kcal: 131, protein: 5.0, carb: 25.0, fat: 1.1 },
  { name: "糙米饭（熟）", category: "主食", kcal: 111, protein: 2.6, carb: 23.0, fat: 0.9 },
  { name: "藜麦（熟）", category: "主食", kcal: 120, protein: 4.4, carb: 21.3, fat: 1.9 },
  { name: "荞麦面（熟）", category: "主食", kcal: 99, protein: 3.4, carb: 20.4, fat: 0.5 },
  { name: "小米粥", category: "主食", kcal: 46, protein: 1.4, carb: 8.4, fat: 0.7 },
  { name: "南瓜（熟）", category: "主食", kcal: 26, protein: 0.7, carb: 6.5, fat: 0.1 },

  // ---- 蛋白质/肉蛋奶 ----
  { name: "鸡胸肉（熟）", category: "蛋白质", kcal: 165, protein: 31.0, carb: 0.0, fat: 3.6 },
  { name: "鸡腿肉（去皮熟）", category: "蛋白质", kcal: 209, protein: 26.0, carb: 0.0, fat: 11.0 },
  { name: "鸡蛋（全蛋）", category: "蛋白质", kcal: 144, protein: 13.0, carb: 1.1, fat: 9.5 },
  { name: "鸡蛋清", category: "蛋白质", kcal: 52, protein: 11.0, carb: 0.7, fat: 0.2 },
  { name: "瘦牛肉（熟）", category: "蛋白质", kcal: 250, protein: 26.0, carb: 0.0, fat: 15.0 },
  { name: "瘦猪肉（熟）", category: "蛋白质", kcal: 240, protein: 27.0, carb: 0.0, fat: 14.0 },
  { name: "猪里脊（熟）", category: "蛋白质", kcal: 155, protein: 20.0, carb: 0.0, fat: 8.0 },
  { name: "羊肉（熟）", category: "蛋白质", kcal: 203, protein: 24.0, carb: 0.0, fat: 11.0 },
  { name: "三文鱼（熟）", category: "蛋白质", kcal: 208, protein: 20.0, carb: 0.0, fat: 13.0 },
  { name: "鳕鱼（熟）", category: "蛋白质", kcal: 88, protein: 20.4, carb: 0.0, fat: 0.5 },
  { name: "龙利鱼（熟）", category: "蛋白质", kcal: 85, protein: 17.0, carb: 0.0, fat: 1.5 },
  { name: "金枪鱼（水浸罐头）", category: "蛋白质", kcal: 116, protein: 26.0, carb: 0.0, fat: 0.8 },
  { name: "虾（熟）", category: "蛋白质", kcal: 99, protein: 24.0, carb: 0.2, fat: 0.3 },
  { name: "鱿鱼（熟）", category: "蛋白质", kcal: 92, protein: 15.6, carb: 3.1, fat: 1.4 },
  { name: "北豆腐", category: "蛋白质", kcal: 98, protein: 8.1, carb: 3.8, fat: 5.4 },
  { name: "南豆腐", category: "蛋白质", kcal: 76, protein: 6.2, carb: 3.2, fat: 4.0 },
  { name: "豆腐干", category: "蛋白质", kcal: 140, protein: 16.0, carb: 4.0, fat: 7.0 },
  { name: "低脂牛奶", category: "蛋白质", kcal: 42, protein: 3.3, carb: 5.0, fat: 1.0 },
  { name: "全脂牛奶", category: "蛋白质", kcal: 61, protein: 3.0, carb: 4.8, fat: 3.3 },
  { name: "希腊酸奶（无糖）", category: "蛋白质", kcal: 73, protein: 10.0, carb: 3.6, fat: 2.5 },
  { name: "低脂酸奶", category: "蛋白质", kcal: 63, protein: 4.5, carb: 7.0, fat: 1.5 },
  { name: "茅屋奶酪", category: "蛋白质", kcal: 98, protein: 11.0, carb: 3.4, fat: 4.3 },
  { name: "乳清蛋白粉", category: "蛋白质", kcal: 400, protein: 80.0, carb: 8.0, fat: 5.0 },

  // ---- 蔬菜 ----
  { name: "西兰花（熟）", category: "蔬菜", kcal: 35, protein: 2.4, carb: 7.0, fat: 0.4 },
  { name: "菠菜（熟）", category: "蔬菜", kcal: 23, protein: 2.9, carb: 3.6, fat: 0.4 },
  { name: "生菜", category: "蔬菜", kcal: 15, protein: 1.4, carb: 2.9, fat: 0.2 },
  { name: "番茄", category: "蔬菜", kcal: 18, protein: 0.9, carb: 3.9, fat: 0.2 },
  { name: "黄瓜", category: "蔬菜", kcal: 15, protein: 0.7, carb: 3.6, fat: 0.1 },
  { name: "胡萝卜", category: "蔬菜", kcal: 41, protein: 0.9, carb: 9.6, fat: 0.2 },
  { name: "青椒", category: "蔬菜", kcal: 20, protein: 0.9, carb: 4.6, fat: 0.2 },
  { name: "彩椒", category: "蔬菜", kcal: 26, protein: 1.0, carb: 6.0, fat: 0.3 },
  { name: "蘑菇", category: "蔬菜", kcal: 22, protein: 3.1, carb: 3.3, fat: 0.3 },
  { name: "金针菇", category: "蔬菜", kcal: 26, protein: 2.4, carb: 6.0, fat: 0.4 },
  { name: "茄子（熟）", category: "蔬菜", kcal: 23, protein: 1.0, carb: 4.9, fat: 0.2 },
  { name: "西葫芦", category: "蔬菜", kcal: 18, protein: 1.2, carb: 3.4, fat: 0.2 },
  { name: "卷心菜", category: "蔬菜", kcal: 22, protein: 1.5, carb: 4.6, fat: 0.2 },
  { name: "白菜", category: "蔬菜", kcal: 17, protein: 1.5, carb: 3.2, fat: 0.1 },
  { name: "芹菜", category: "蔬菜", kcal: 16, protein: 1.2, carb: 3.1, fat: 0.2 },
  { name: "洋葱", category: "蔬菜", kcal: 40, protein: 1.1, carb: 9.3, fat: 0.1 },
  { name: "芦笋（熟）", category: "蔬菜", kcal: 22, protein: 2.4, carb: 4.1, fat: 0.2 },
  { name: "荷兰豆", category: "蔬菜", kcal: 42, protein: 2.8, carb: 7.6, fat: 0.3 },

  // ---- 水果 ----
  { name: "苹果", category: "水果", kcal: 52, protein: 0.3, carb: 13.8, fat: 0.2 },
  { name: "香蕉", category: "水果", kcal: 89, protein: 1.1, carb: 22.8, fat: 0.3 },
  { name: "橙子", category: "水果", kcal: 47, protein: 0.9, carb: 11.8, fat: 0.1 },
  { name: "蓝莓", category: "水果", kcal: 57, protein: 0.7, carb: 14.5, fat: 0.3 },
  { name: "草莓", category: "水果", kcal: 32, protein: 0.7, carb: 7.7, fat: 0.3 },
  { name: "葡萄", category: "水果", kcal: 69, protein: 0.7, carb: 18.1, fat: 0.2 },
  { name: "西瓜", category: "水果", kcal: 30, protein: 0.6, carb: 7.6, fat: 0.2 },
  { name: "猕猴桃", category: "水果", kcal: 61, protein: 1.1, carb: 14.7, fat: 0.5 },
  { name: "梨", category: "水果", kcal: 50, protein: 0.4, carb: 13.1, fat: 0.1 },
  { name: "桃", category: "水果", kcal: 42, protein: 0.9, carb: 10.1, fat: 0.1 },
  { name: "芒果", category: "水果", kcal: 60, protein: 0.8, carb: 15.0, fat: 0.4 },
  { name: "火龙果", category: "水果", kcal: 55, protein: 1.1, carb: 13.3, fat: 0.2 },

  // ---- 坚果/脂肪 ----
  { name: "花生", category: "坚果", kcal: 567, protein: 25.8, carb: 16.1, fat: 49.2 },
  { name: "杏仁", category: "坚果", kcal: 579, protein: 21.2, carb: 21.6, fat: 49.9 },
  { name: "核桃", category: "坚果", kcal: 654, protein: 15.2, carb: 13.7, fat: 65.2 },
  { name: "腰果", category: "坚果", kcal: 553, protein: 18.2, carb: 30.2, fat: 43.8 },
  { name: "开心果", category: "坚果", kcal: 560, protein: 20.2, carb: 27.2, fat: 45.3 },
  { name: "奇亚籽", category: "坚果", kcal: 486, protein: 16.5, carb: 42.1, fat: 30.7 },
  { name: "花生酱", category: "坚果", kcal: 588, protein: 25.0, carb: 20.0, fat: 50.0 },
  { name: "橄榄油", category: "油脂", kcal: 884, protein: 0.0, carb: 0.0, fat: 100.0 },
  { name: "椰子油", category: "油脂", kcal: 862, protein: 0.0, carb: 0.0, fat: 100.0 },
  { name: "黄油", category: "油脂", kcal: 717, protein: 0.9, carb: 0.1, fat: 81.1 },
  { name: "牛油果", category: "水果", kcal: 160, protein: 2.0, carb: 8.5, fat: 14.7 },
  { name: "黑巧克力（70%）", category: "零食", kcal: 598, protein: 7.8, carb: 46.0, fat: 43.0 },

  // ---- 零食/其他 ----
  { name: "苏打饼干", category: "零食", kcal: 408, protein: 8.4, carb: 76.2, fat: 7.7 },
  { name: "薯片", category: "零食", kcal: 548, protein: 6.6, carb: 51.0, fat: 36.0 },
  { name: "可乐", category: "饮料", kcal: 43, protein: 0.0, carb: 10.6, fat: 0.0 },
  { name: "橙汁（无糖）", category: "饮料", kcal: 45, protein: 0.7, carb: 10.4, fat: 0.2 },
  { name: "黑咖啡", category: "饮料", kcal: 2, protein: 0.1, carb: 0.0, fat: 0.0 },
  { name: "蜂蜜", category: "调味", kcal: 321, protein: 0.4, carb: 80.0, fat: 0.0 },
  { name: "白砂糖", category: "调味", kcal: 400, protein: 0.0, carb: 100.0, fat: 0.0 },
  { name: "酱油", category: "调味", kcal: 63, protein: 5.6, carb: 10.0, fat: 0.0 },
  { name: "蛋黄酱", category: "调味", kcal: 680, protein: 1.0, carb: 3.5, fat: 74.0 },
];

/**
 * 内置餐食模板库（推荐食谱用）
 * 每个方案下，按「减脂 / 增肌 / 日常健康」三类目标各配若干套一日三餐。
 * 每餐 items 引用 FOODS 里的 name + 克数（g），份量按 70kg 基准设计，
 * 推荐时按用户实际体重等比例缩放。
 *
 * 结构：
 * {
 *   goal: "减脂" | "增肌" | "日常健康",
 *   name: 模板名,
 *   meals: { 早餐:[{n:"米饭（熟）",g:200}...], 午餐:[...], 晚餐:[...] }
 * }
 */
const MEAL_TEMPLATES = [
  // ===== 减脂 =====
  {
    goal: "减脂", name: "经典三明治减脂餐",
    meals: {
      "早餐": [ {n:"全麦面包",g:80}, {n:"鸡蛋（全蛋）",g:100}, {n:"低脂牛奶",g:250}, {n:"番茄",g:100} ],
      "午餐": [ {n:"糙米饭（熟）",g:150}, {n:"鸡胸肉（熟）",g:150}, {n:"西兰花（熟）",g:200}, {n:"橄榄油",g:5} ],
      "晚餐": [ {n:"红薯（熟）",g:200}, {n:"三文鱼（熟）",g:120}, {n:"生菜",g:150}, {n:"橄榄油",g:5} ]
    }
  },
  {
    goal: "减脂", name: "中式低脂家常餐",
    meals: {
      "早餐": [ {n:"燕麦片（干）",g:50}, {n:"鸡蛋清",g:100}, {n:"蓝莓",g:80}, {n:"低脂牛奶",g:200} ],
      "午餐": [ {n:"米饭（熟）",g:180}, {n:"瘦牛肉（熟）",g:120}, {n:"青椒",g:150}, {n:"橄榄油",g:6} ],
      "晚餐": [ {n:"玉米（熟）",g:150}, {n:"虾（熟）",g:150}, {n:"菠菜（熟）",g:200}, {n:"橄榄油",g:5} ]
    }
  },
  {
    goal: "减脂", name: "高蛋白轻食餐",
    meals: {
      "早餐": [ {n:"希腊酸奶（无糖）",g:200}, {n:"燕麦片（干）",g:30}, {n:"草莓",g:100}, {n:"核桃",g:10} ],
      "午餐": [ {n:"藜麦（熟）",g:150}, {n:"鸡腿肉（去皮熟）",g:150}, {n:"西兰花（熟）",g:200}, {n:"牛油果",g:50} ],
      "晚餐": [ {n:"土豆（熟）",g:200}, {n:"鳕鱼（熟）",g:150}, {n:"蘑菇",g:150}, {n:"橄榄油",g:5} ]
    }
  },
  // ===== 增肌 =====
  {
    goal: "增肌", name: "增肌高碳水餐",
    meals: {
      "早餐": [ {n:"燕麦片（干）",g:80}, {n:"鸡蛋（全蛋）",g:150}, {n:"香蕉",g:120}, {n:"全脂牛奶",g:300} ],
      "午餐": [ {n:"米饭（熟）",g:300}, {n:"鸡胸肉（熟）",g:200}, {n:"西兰花（熟）",g:200}, {n:"橄榄油",g:10} ],
      "晚餐": [ {n:"意大利面（熟）",g:250}, {n:"瘦牛肉（熟）",g:180}, {n:"番茄",g:150}, {n:"橄榄油",g:10} ]
    }
  },
  {
    goal: "增肌", name: "增肌均衡营养餐",
    meals: {
      "早餐": [ {n:"全麦面包",g:120}, {n:"鸡蛋（全蛋）",g:150}, {n:"希腊酸奶（无糖）",g:200}, {n:"香蕉",g:100} ],
      "午餐": [ {n:"糙米饭（熟）",g:250}, {n:"瘦猪肉（熟）",g:180}, {n:"青椒",g:150}, {n:"橄榄油",g:8} ],
      "晚餐": [ {n:"红薯（熟）",g:300}, {n:"三文鱼（熟）",g:150}, {n:"菠菜（熟）",g:200}, {n:"核桃",g:15} ]
    }
  },
  // ===== 日常健康 =====
  {
    goal: "日常健康", name: "均衡膳食餐",
    meals: {
      "早餐": [ {n:"小米粥",g:300}, {n:"鸡蛋（全蛋）",g:100}, {n:"苹果",g:150}, {n:"低脂牛奶",g:200} ],
      "午餐": [ {n:"米饭（熟）",g:200}, {n:"瘦猪肉（熟）",g:100}, {n:"西兰花（熟）",g:150}, {n:"胡萝卜",g:100}, {n:"橄榄油",g:8} ],
      "晚餐": [ {n:"玉米（熟）",g:150}, {n:"北豆腐",g:150}, {n:"白菜",g:200}, {n:"蘑菇",g:100}, {n:"橄榄油",g:5} ]
    }
  },
  {
    goal: "日常健康", name: "清淡养生餐",
    meals: {
      "早餐": [ {n:"燕麦片（干）",g:40}, {n:"鸡蛋（全蛋）",g:100}, {n:"猕猴桃",g:100}, {n:"低脂酸奶",g:200} ],
      "午餐": [ {n:"荞麦面（熟）",g:200}, {n:"虾（熟）",g:120}, {n:"黄瓜",g:150}, {n:"番茄",g:100}, {n:"橄榄油",g:5} ],
      "晚餐": [ {n:"南瓜（熟）",g:200}, {n:"鳕鱼（熟）",g:120}, {n:"卷心菜",g:200}, {n:"橄榄油",g:5} ]
    }
  }
];
