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
  { name: "燕麦片（干）", category: "主食", kcal: 367, protein: 15.0, carb: 61.0, fat: 6.7 },
  { name: "红薯（熟）", category: "主食", kcal: 90, protein: 1.4, carb: 20.7, fat: 0.2 },
  { name: "玉米（熟）", category: "主食", kcal: 112, protein: 4.0, carb: 22.8, fat: 1.2 },
  { name: "意大利面（熟）", category: "主食", kcal: 131, protein: 5.0, carb: 25.0, fat: 1.1 },
  { name: "糙米饭（熟）", category: "主食", kcal: 111, protein: 2.6, carb: 23.0, fat: 0.9 },

  // ---- 蛋白质/肉蛋奶 ----
  { name: "鸡胸肉（熟）", category: "蛋白质", kcal: 165, protein: 31.0, carb: 0.0, fat: 3.6 },
  { name: "鸡腿肉（去皮熟）", category: "蛋白质", kcal: 209, protein: 26.0, carb: 0.0, fat: 11.0 },
  { name: "鸡蛋（全蛋）", category: "蛋白质", kcal: 144, protein: 13.0, carb: 1.1, fat: 9.5 },
  { name: "鸡蛋清", category: "蛋白质", kcal: 52, protein: 11.0, carb: 0.7, fat: 0.2 },
  { name: "瘦牛肉（熟）", category: "蛋白质", kcal: 250, protein: 26.0, carb: 0.0, fat: 15.0 },
  { name: "瘦猪肉（熟）", category: "蛋白质", kcal: 240, protein: 27.0, carb: 0.0, fat: 14.0 },
  { name: "三文鱼（熟）", category: "蛋白质", kcal: 208, protein: 20.0, carb: 0.0, fat: 13.0 },
  { name: "金枪鱼（水浸罐头）", category: "蛋白质", kcal: 116, protein: 26.0, carb: 0.0, fat: 0.8 },
  { name: "虾（熟）", category: "蛋白质", kcal: 99, protein: 24.0, carb: 0.2, fat: 0.3 },
  { name: "北豆腐", category: "蛋白质", kcal: 98, protein: 8.1, carb: 3.8, fat: 5.4 },
  { name: "低脂牛奶", category: "蛋白质", kcal: 42, protein: 3.3, carb: 5.0, fat: 1.0 },
  { name: "全脂牛奶", category: "蛋白质", kcal: 61, protein: 3.0, carb: 4.8, fat: 3.3 },
  { name: "希腊酸奶（无糖）", category: "蛋白质", kcal: 73, protein: 10.0, carb: 3.6, fat: 2.5 },
  { name: "乳清蛋白粉", category: "蛋白质", kcal: 400, protein: 80.0, carb: 8.0, fat: 5.0 },

  // ---- 蔬菜 ----
  { name: "西兰花（熟）", category: "蔬菜", kcal: 35, protein: 2.4, carb: 7.0, fat: 0.4 },
  { name: "菠菜（熟）", category: "蔬菜", kcal: 23, protein: 2.9, carb: 3.6, fat: 0.4 },
  { name: "生菜", category: "蔬菜", kcal: 15, protein: 1.4, carb: 2.9, fat: 0.2 },
  { name: "番茄", category: "蔬菜", kcal: 18, protein: 0.9, carb: 3.9, fat: 0.2 },
  { name: "黄瓜", category: "蔬菜", kcal: 15, protein: 0.7, carb: 3.6, fat: 0.1 },
  { name: "胡萝卜", category: "蔬菜", kcal: 41, protein: 0.9, carb: 9.6, fat: 0.2 },
  { name: "青椒", category: "蔬菜", kcal: 20, protein: 0.9, carb: 4.6, fat: 0.2 },
  { name: "蘑菇", category: "蔬菜", kcal: 22, protein: 3.1, carb: 3.3, fat: 0.3 },

  // ---- 水果 ----
  { name: "苹果", category: "水果", kcal: 52, protein: 0.3, carb: 13.8, fat: 0.2 },
  { name: "香蕉", category: "水果", kcal: 89, protein: 1.1, carb: 22.8, fat: 0.3 },
  { name: "橙子", category: "水果", kcal: 47, protein: 0.9, carb: 11.8, fat: 0.1 },
  { name: "蓝莓", category: "水果", kcal: 57, protein: 0.7, carb: 14.5, fat: 0.3 },
  { name: "草莓", category: "水果", kcal: 32, protein: 0.7, carb: 7.7, fat: 0.3 },
  { name: "葡萄", category: "水果", kcal: 69, protein: 0.7, carb: 18.1, fat: 0.2 },

  // ---- 坚果/脂肪 ----
  { name: "花生", category: "坚果", kcal: 567, protein: 25.8, carb: 16.1, fat: 49.2 },
  { name: "杏仁", category: "坚果", kcal: 579, protein: 21.2, carb: 21.6, fat: 49.9 },
  { name: "核桃", category: "坚果", kcal: 654, protein: 15.2, carb: 13.7, fat: 65.2 },
  { name: "橄榄油", category: "油脂", kcal: 884, protein: 0.0, carb: 0.0, fat: 100.0 },
  { name: "牛油果", category: "水果", kcal: 160, protein: 2.0, carb: 8.5, fat: 14.7 },
  { name: "花生酱", category: "坚果", kcal: 588, protein: 25.0, carb: 20.0, fat: 50.0 },
];
