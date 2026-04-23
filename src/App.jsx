import React, { useState, useEffect } from 'react';

// --- 全データ定義 (各100問、計300問) ---
const allStagesData = {
  stage1: [
  { q: "I have a high ___ of success.", a: "expectation", hint: "成功の見込みが高いです。" },
  { q: "His ___ are very simple.", a: "needs", hint: "彼の必要なものはとても単純です。" },
  { q: "It is my ___ to help you.", a: "pleasure", hint: "あなたを助けることは私の喜びです。" },
  { q: "He has a ___ for music.", a: "talent", hint: "彼には音楽の才能があります。" },
  { q: "The ___ of the movie was exciting.", a: "ending", hint: "その映画の結末はワクワクするものでした。" },
  { q: "She has a large ___ of shoes.", a: "collection", hint: "彼女はたくさんの靴のコレクションを持っています。" },
  { q: "I made a ___ to study hard.", a: "promise", hint: "私は一生懸命勉強すると約束しました。" },
  { q: "He has an ___ to succeed.", a: "ambition", hint: "彼には成功したいという野心があります。" },
  { q: "The ___ of the car is 200km/h.", a: "speed", hint: "その車の速度は時速200kmです。" },
  { q: "It was a great ___ to meet you.", a: "opportunity", hint: "あなたにお会いできて素晴らしい機会でした。" },
  { q: "He has no ___ of danger.", a: "sense", hint: "彼には危険に対する感覚がありません。" },
  { q: "What is your ___ for the future?", a: "vision", hint: "あなたの将来の展望は何ですか？" },
  { q: "She has a positive ___.", a: "attitude", hint: "彼女は前向きな態度を持っています。" },
  { q: "The ___ of the book is interesting.", a: "content", hint: "その本の内容は興味深いです。" },
  { q: "It was a big ___ in my life.", a: "event", hint: "それは私の人生で大きな出来事でした。" },
  { q: "I need to make a ___.", a: "choice", hint: "選択をする必要があります。" },
  { q: "The ___ of the team is strong.", a: "spirit", hint: "そのチームの精神は強いです。" },
  { q: "He has a lot of ___.", a: "energy", hint: "彼はたくさんのエネルギーを持っています。" },
  { q: "The ___ is very beautiful.", a: "view", hint: "その眺めはとても美しいです。" },
  { q: "I have a ___ with my friend.", a: "date", hint: "友達と会う約束があります。" },
  { q: "This is a basic ___ of biology.", a: "principle", hint: "これは生物学の基本的な原理です。" },
  { q: "I have no ___ to go there.", a: "intention", hint: "そこへ行くつもりはありません。" },
  { q: "The ___ of the sun is bright.", a: "light", hint: "太陽の光は明るいです。" },
  { q: "It's a matter of ___.", a: "opinion", hint: "それは意見の問題です。" },
  { q: "We need to find a ___.", a: "solution", hint: "解決策を見つける必要があります。" },
  { q: "He is a man of ___.", a: "character", hint: "彼は人格者です。" },
  { q: "The ___ was very beautiful.", a: "scenery", hint: "景色がとても綺麗でした。" },
  { q: "I don't have the ___ to do that.", a: "courage", hint: "それをする勇気がありません。" },
  { q: "It is a common ___.", a: "standard", hint: "それは一般的な基準です。" },
  { q: "The ___ is very clear.", a: "evidence", hint: "証拠は非常に明確です。" },
  { q: "She has a good ___.", a: "memory", hint: "彼女は記憶力が良いです。" },
  { q: "The ___ of the building is high.", a: "height", hint: "その建物の高さは高いです。" },
  { q: "I'll give you a ___.", a: "chance", hint: "あなたにチャンスを与えましょう。" },
  { q: "The ___ was successful.", a: "project", hint: "そのプロジェクトは成功しました。" },
  { q: "It's a huge ___.", a: "amount", hint: "それは膨大な量です。" },
  { q: "The ___ is interesting.", a: "subject", hint: "その主題は面白いです。" },
  { q: "I have a ___ in my pocket.", a: "coin", hint: "ポケットにコインがあります。" },
  { q: "He is a ___ of the club.", a: "member", hint: "彼はそのクラブの一員です。" },
  { q: "The ___ is very hot.", a: "summer", hint: "夏はとても暑いです。" },
  { q: "It was a wonderful ___.", a: "experience", hint: "それは素晴らしい経験でした。" },
  { q: "She has high ___.", a: "ideals", hint: "彼女は高い理想を持っています。" },
  { q: "He made a quick ___.", a: "decision", hint: "彼は素早い決断を下しました。" },
  { q: "The ___ of the lake is calm.", a: "surface", hint: "湖の表面は穏やかです。" },
  { q: "I have a new ___.", a: "habit", hint: "新しい習慣ができました。" },
  { q: "The ___ of the room is large.", a: "size", hint: "部屋のサイズは大きいです。" },
  { q: "He showed great ___.", a: "patience", hint: "彼は素晴らしい忍耐強さを見せました。" },
  { q: "The ___ is very quiet.", a: "village", hint: "その村はとても静かです。" },
  { q: "I made a ___ for the flight.", a: "reservation", hint: "飛行機の予約をしました。" },
  { q: "The ___ was very difficult.", a: "challenge", hint: "その挑戦はとても困難でした。" },
  { q: "He has a lot of ___.", a: "knowledge", hint: "彼は知識が豊富です。" },
  { q: "The ___ of the river is long.", a: "length", hint: "その川の長さは長いです。" },
  { q: "I have a special ___.", a: "gift", hint: "私には特別な贈り物（才能）があります。" },
  { q: "The ___ was very loud.", a: "noise", hint: "その音はとてもうるさかったです。" },
  { q: "She has a unique ___.", a: "style", hint: "彼女は独特なスタイルを持っています。" },
  { q: "The ___ is very deep.", a: "ocean", hint: "海はとても深いです。" },
  { q: "I have a ___ with my boss.", a: "meeting", hint: "上司と会議があります。" },
  { q: "The ___ of the sky is blue.", a: "color", hint: "空の色は青いです。" },
  { q: "He is a famous ___.", a: "author", hint: "彼は有名な著者です。" },
  { q: "The ___ is very cold.", a: "winter", hint: "冬はとても寒いです。" },
  { q: "I have a ___ for the party.", a: "plan", hint: "パーティーの計画があります。" },
  { q: "The ___ of the mountain is high.", a: "top", hint: "山の頂上は高いです。" },
  { q: "She has a beautiful ___.", a: "voice", hint: "彼女は美しい声を持っています。" },
  { q: "The ___ was a big surprise.", a: "news", hint: "そのニュースは大きな驚きでした。" },
  { q: "I have a ___ about the future.", a: "dream", hint: "私には将来の夢があります。" },
  { q: "The ___ of the city is large.", a: "population", hint: "その都市の人口は多いです。" },
  { q: "He has a lot of ___.", a: "property", hint: "彼はたくさんの財産を持っています。" },
  { q: "The ___ is very wide.", a: "road", hint: "その道路はとても広いです。" },
  { q: "I have a ___ for the exam.", a: "goal", hint: "試験に向けた目標があります。" },
  { q: "The ___ was very old.", a: "building", hint: "その建物はとても古かったです。" },
  { q: "She has a kind ___.", a: "heart", hint: "彼女は優しい心を持っています。" },
  { q: "The ___ is very strong.", a: "wind", hint: "風がとても強いです。" },
  { q: "I have a ___ with the doctor.", a: "appointment", hint: "医者との予約があります。" },
  { q: "The ___ of the movie is funny.", a: "story", hint: "その映画の物語は面白いです。" },
  { q: "He is a good ___.", a: "friend", hint: "彼は良い友達です。" },
  { q: "The ___ is very dry.", a: "desert", hint: "砂漠はとても乾燥しています。" },
  { q: "I have a ___ to study.", a: "desire", hint: "勉強したいという欲求があります。" },
  { q: "The ___ of the box is small.", a: "weight", hint: "その箱の重さは軽いです。" },
  { q: "She has a lot of ___.", a: "pride", hint: "彼女は誇りを持っています。" },
  { q: "The ___ is very green.", a: "forest", hint: "森はとても緑が豊かです。" },
  { q: "I have a ___ for the trip.", a: "budget", hint: "旅行の予算があります。" },
  { q: "The ___ was very clear.", a: "instruction", hint: "指示はとても明確でした。" },
  { q: "He has a lot of ___.", a: "skill", hint: "彼は高い技術を持っています。" },
  { q: "The ___ is very large.", a: "island", hint: "その島はとても大きいです。" },
  { q: "I have a ___ for the future.", a: "hope", hint: "将来に希望を持っています。" },
  { q: "The ___ of the car is red.", a: "model", hint: "その車のモデルは赤です。" },
  { q: "She has a great ___.", a: "imagination", hint: "彼女は素晴らしい想像力を持っています。" },
  { q: "The ___ is very beautiful.", a: "garden", hint: "その庭はとても美しいです。" },
  { q: "I have a ___ about the world.", a: "question", hint: "世界について質問があります。" },
  { q: "The ___ was very fast.", a: "train", hint: "その電車はとても速かったです。" },
  { q: "He has a lot of ___.", a: "faith", hint: "彼は強い信念を持っています。" },
  { q: "The ___ is very blue.", a: "sea", hint: "海はとても青いです。" },
  { q: "I have a ___ for the movie.", a: "ticket", hint: "映画のチケットを持っています。" },
  { q: "The ___ was very high.", a: "price", hint: "その価格はとても高かったです。" },
  { q: "She has a lot of ___.", a: "loyalty", hint: "彼女はとても忠実です。" },
  { q: "The ___ is very small.", a: "pond", hint: "その池はとても小さいです。" },
  { q: "I have a ___ for the task.", a: "deadline", hint: "その課題には締め切りがあります。" },
  { q: "The ___ was very bright.", a: "star", hint: "星がとても明るかったです。" },
  { q: "He has a lot of ___.", a: "humor", hint: "彼はユーモアがあります。" },
  { q: "The ___ is very deep.", a: "valley", hint: "その谷はとても深いです。" },
  { q: "I have a ___ about the trip.", a: "memory", hint: "旅行についての思い出があります。" }
],
 stage2: [
  { q: "I had no ___ to go there.", a: "intention", hint: "そこへ行くつもり（意図）はありませんでした。" },
  { q: "He has a lot of ___.", a: "courage", hint: "彼にはたくさんの勇気があります。" },
  { q: "It's my ___ to help you.", a: "duty", hint: "あなたを助けるのが私の義務です。" },
  { q: "She has a good ___.", a: "character", hint: "彼女は性格（人格）が良いです。" },
  { q: "The ___ was successful.", a: "operation", hint: "その手術（または作戦）は成功しました。" },
  { q: "What's the ___ of the sun?", a: "distance", hint: "太陽までの距離はどれくらいですか？" },
  { q: "We need more ___.", a: "evidence", hint: "もっと多くの証拠が必要です。" },
  { q: "He has a lot of ___.", a: "experience", hint: "彼は経験が豊富です。" },
  { q: "The ___ is very high.", a: "standard", hint: "その基準（水準）はとても高いです。" },
  { q: "It's a huge ___.", a: "amount", hint: "それは膨大な量です。" },
  { q: "She is in a difficult ___.", a: "position", hint: "彼女は難しい立場にいます。" },
  { q: "I have a ___ in my leg.", a: "pain", hint: "足に痛みがあります。" },
  { q: "The ___ is very clear.", a: "sight", hint: "その光景（視界）はとてもはっきりしています。" },
  { q: "He is a ___ of the team.", a: "member", hint: "彼はチームの一員です。" },
  { q: "The ___ of the book is interesting.", a: "subject", hint: "その本の主題（テーマ）は面白いです。" },
  { q: "I have a ___ with the teacher.", a: "meeting", hint: "先生との面談があります。" },
  { q: "The ___ of the game is simple.", a: "rule", hint: "そのゲームのルールは単純です。" },
  { q: "She has a lot of ___.", a: "knowledge", hint: "彼女は知識が豊富です。" },
  { q: "It was a big ___.", a: "surprise", hint: "それは大きな驚きでした。" },
  { q: "The ___ is very beautiful.", a: "scenery", hint: "景色がとても美しいです。" },
  { q: "He has a strong ___.", a: "will", hint: "彼は強い意志を持っています。" },
  { q: "The ___ is 50 dollars.", a: "price", hint: "価格は50ドルです。" },
  { q: "I have a ___ for you.", a: "gift", hint: "あなたへの贈り物があります。" },
  { q: "The ___ of the box is heavy.", a: "weight", hint: "その箱の重さは重いです。" },
  { q: "She has a ___ for music.", a: "passion", hint: "彼女は音楽に対して情熱を持っています。" },
  { q: "The ___ is very cold.", a: "weather", hint: "天気はとても寒いです。" },
  { q: "I have a ___ about the plan.", a: "doubt", hint: "その計画について疑念（疑い）があります。" },
  { q: "The ___ is very quiet.", a: "neighborhood", hint: "その近隣地域はとても静かです。" },
  { q: "He has a good ___.", a: "reputation", hint: "彼は評判が良いです。" },
  { q: "The ___ was a big success.", a: "festival", hint: "そのお祭りは大成功でした。" },
  { q: "I made a ___.", a: "mistake", hint: "間違いを犯しました。" },
  { q: "The ___ is very long.", a: "journey", hint: "その旅はとても長いです。" },
  { q: "She has a lot of ___.", a: "influence", hint: "彼女は大きな影響力を持っています。" },
  { q: "The ___ was very clear.", a: "instruction", hint: "指示はとても明確でした。" },
  { q: "I have a ___ to study.", a: "desire", hint: "勉強したいという強い欲求があります。" },
  { q: "The ___ was very dark.", a: "valley", hint: "その谷はとても暗かったです。" },
  { q: "He has a lot of ___.", a: "confidence", hint: "彼は大きな自信を持っています。" },
  { q: "The ___ of the city is beautiful.", a: "atmosphere", hint: "その都市の雰囲気は美しいです。" },
  { q: "I have a ___ in my office.", a: "guest", hint: "オフィスに来客（ゲスト）がいます。" },
  { q: "The ___ was very interesting.", a: "lecture", hint: "その講義はとても面白かったです。" },
  { q: "She has a good ___.", a: "habit", hint: "彼女は良い習慣を持っています。" },
  { q: "The ___ is very large.", a: "audience", hint: "観客がとても多いです。" },
  { q: "I have a ___ for the exam.", a: "schedule", hint: "試験のスケジュールがあります。" },
  { q: "The ___ was very helpful.", a: "advice", hint: "そのアドバイスはとても役立ちました。" },
  { q: "He has a lot of ___.", a: "property", hint: "彼はたくさんの財産（所有物）を持っています。" },
  { q: "The ___ is very important.", a: "safety", hint: "安全は非常に重要です。" },
  { q: "I have a ___ to my family.", a: "debt", hint: "私は家族に借金（恩）があります。" },
  { q: "The ___ was very small.", a: "village", hint: "その村はとても小さかったです。" },
  { q: "She has a lot of ___.", a: "patience", hint: "彼女はとても忍耐強いです。" },
  { q: "The ___ was very long.", a: "queue", hint: "その行列（待ち行列）はとても長かったです。" },
  { q: "I have a ___ about the product.", a: "complaint", hint: "製品についての苦情があります。" },
  { q: "The ___ is very narrow.", a: "passage", hint: "その通路（一節）はとても狭いです。" },
  { q: "He has a lot of ___.", a: "skill", hint: "彼は高い技術（技能）を持っています。" },
  { q: "The ___ was very deep.", a: "ocean", hint: "海はとても深かったです。" },
  { q: "I have a ___ for the weekend.", a: "plan", hint: "週末の計画があります。" },
  { q: "The ___ is very high.", a: "mountain", hint: "その山はとても高いです。" },
  { q: "She has a lot of ___.", a: "imagination", hint: "彼女は想像力が豊かです。" },
  { q: "The ___ was very loud.", a: "noise", hint: "その騒音はとてもうるさかったです。" },
  { q: "I have a ___ to work.", a: "duty", hint: "仕事をする義務があります。" },
  { q: "The ___ was very high.", a: "temperature", hint: "気温（温度）がとても高かったです。" },
  { q: "He has a lot of ___.", a: "money", hint: "彼はたくさんのお金を持っています。" },
  { q: "The ___ is very famous.", a: "castle", hint: "その城はとても有名です。" },
  { q: "I have a ___ with my boss.", a: "conflict", hint: "上司と対立（衝突）があります。" },
  { q: "The ___ was very fast.", a: "growth", hint: "成長が非常に早かったです。" },
  { q: "She has a lot of ___.", a: "wisdom", hint: "彼女は知恵が豊富です。" },
  { q: "The ___ is very large.", a: "continent", hint: "その大陸はとても大きいです。" },
  { q: "I have a ___ about the future.", a: "worry", hint: "将来について心配事があります。" },
  { q: "The ___ was very thick.", a: "forest", hint: "森はとてもうっそうとして（厚く）いました。" },
  { q: "He has a lot of ___.", a: "pride", hint: "彼は誇りを持っています。" },
  { q: "The ___ is very small.", a: "island", hint: "その島はとても小さいです。" },
  { q: "I have a ___ for the party.", a: "costume", hint: "パーティーの衣装を持っています。" },
  { q: "The ___ was very low.", a: "valley", hint: "その谷はとても低い場所にありました。" },
  { q: "She has a lot of ___.", a: "curiosity", hint: "彼女は好奇心が旺盛です。" },
  { q: "The ___ was very bright.", a: "planet", hint: "その惑星はとても輝いていました。" },
  { q: "I have a ___ for the summer.", a: "vacation", hint: "夏の休暇の予定があります。" },
  { q: "The ___ was very quiet.", a: "library", hint: "図書館はとても静かでした。" },
  { q: "He has a lot of ___.", a: "humor", hint: "彼はユーモアがあります。" },
  { q: "The ___ was very old.", a: "temple", hint: "その寺院はとても古かったです。" },
  { q: "I have a ___ about the story.", a: "memory", hint: "その物語についての記憶があります。" },
  { q: "The ___ was very clear.", a: "stream", hint: "その小川はとても澄んでいました。" },
  { q: "She has a lot of ___.", a: "responsibility", hint: "彼女は大きな責任を持っています。" },
  { q: "The ___ was very beautiful.", a: "sculpture", hint: "その彫刻はとても美しかったです。" },
  { q: "I have a ___ for the flight.", a: "ticket", hint: "飛行機のチケットを持っています。" },
  { q: "The ___ was very far.", a: "horizon", hint: "地平線はとても遠かったです。" },
  { q: "He has a lot of ___.", a: "faith", hint: "彼は強い信頼（信仰）を持っています。" },
  { q: "The ___ was very fast.", a: "river", hint: "その川の流れはとても早かったです。" },
  { q: "I have a ___ for the car.", a: "key", hint: "車の鍵を持っています。" },
  { q: "The ___ was very high.", a: "cliff", hint: "その崖はとても高かったです。" },
  { q: "She has a lot of ___.", a: "loyalty", hint: "彼女はとても忠実です。" },
  { q: "The ___ was very hot.", a: "desert", hint: "砂漠はとても暑かったです。" },
  { q: "I have a ___ for the door.", a: "handle", hint: "ドアの取っ手を持っています。" },
  { q: "The ___ was very deep.", a: "cave", hint: "その洞窟はとても深かったです。" },
  { q: "He has a lot of ___.", a: "greed", hint: "彼は強欲です。" },
  { q: "The ___ was very small.", a: "pond", hint: "その池はとても小さかったです。" },
  { q: "I have a ___ for the light.", a: "switch", hint: "ライトのスイッチを持っています。" },
  { q: "The ___ was very dry.", a: "land", hint: "その土地はとても乾燥していました。" },
  { q: "She has a lot of ___.", a: "pity", hint: "彼女は哀れみ（同情）の心を持っています。" },
  { q: "The ___ was very green.", a: "field", hint: "野原はとても緑が豊かでした。" },
  { q: "I have a ___ for the house.", a: "roof", hint: "家の屋根があります。" },
  { q: "The ___ was very blue.", a: "sky", hint: "空はとても青かったです。" }
],
  stage3: [
  { q: "The Japanese ___ is growing.", a: "economy", hint: "日本経済は成長しています。" },
  { q: "I'm under a lot of ___.", a: "pressure", hint: "私は強いプレッシャー（圧力）を感じています。" },
  { q: "Air ___ is a serious problem.", a: "pollution", hint: "大気汚染は深刻な問題です。" },
  { q: "Water is a natural ___.", a: "resource", hint: "水は天然資源です。" },
  { q: "The ___ of the test was good.", a: "result", hint: "テストの結果は良かったです。" },
  { q: "He made a big ___.", a: "profit", hint: "彼は大きな利益を出しました。" },
  { q: "The ___ of the company is 500.", a: "staff", hint: "その会社の職員数は500人です。" },
  { q: "What's the ___ of this tool?", a: "purpose", hint: "この道具の目的は何ですか？" },
  { q: "The ___ was very small.", a: "amount", hint: "その量（金額）はとても少なかったです。" },
  { q: "We need more ___.", a: "information", hint: "もっと情報が必要です。" },
  { q: "The ___ is very high.", a: "quality", hint: "その品質はとても高いです。" },
  { q: "He has a lot of ___.", a: "influence", hint: "彼は大きな影響力を持っています。" },
  { q: "The ___ is 100 dollars.", a: "cost", hint: "費用（価格）は100ドルです。" },
  { q: "She has a good ___.", a: "career", hint: "彼女は良い経歴（キャリア）を持っています。" },
  { q: "The ___ was very difficult.", a: "task", hint: "その仕事（課題）はとても難しかったです。" },
  { q: "He is a ___ of the city.", a: "citizen", hint: "彼はその市の市民です。" },
  { q: "The ___ is very fast.", a: "development", hint: "開発（発展）が非常に早いです。" },
  { q: "I have a ___ with the bank.", a: "account", hint: "銀行に口座を持っています。" },
  { q: "The ___ was a big success.", a: "project", hint: "そのプロジェクトは大きな成功でした。" },
  { q: "She has a lot of ___.", a: "experience", hint: "彼女は経験が豊富です。" },
  { q: "The ___ is very clear.", a: "evidence", hint: "証拠は非常に明確です。" },
  { q: "He has a strong ___.", a: "character", hint: "彼は強い性格（個性）を持っています。" },
  { q: "The ___ is very high.", a: "standard", hint: "その基準（水準）はとても高いです。" },
  { q: "I have a ___ about the future.", a: "vision", hint: "将来に対する展望（ビジョン）を持っています。" },
  { q: "The ___ was very helpful.", a: "service", hint: "そのサービスはとても役立ちました。" },
  { q: "She has a lot of ___.", a: "energy", hint: "彼女はエネルギーに満ちあふれています。" },
  { q: "The ___ is very beautiful.", a: "nature", hint: "自然はとても美しいです。" },
  { q: "I have a ___ to study.", a: "chance", hint: "勉強するチャンス（機会）があります。" },
  { q: "The ___ is very large.", a: "market", hint: "その市場はとても大きいです。" },
  { q: "He has a lot of ___.", a: "power", hint: "彼は大きな力（権力）を持っています。" },
  { q: "The ___ was very long.", a: "history", hint: "その歴史はとても長かったです。" },
  { q: "She has a good ___.", a: "memory", hint: "彼女は記憶力が良いです。" },
  { q: "The ___ is very small.", a: "detail", hint: "詳細はとても細かいです。" },
  { q: "I have a ___ with the doctor.", a: "appointment", hint: "医者との予約（面会の約束）があります。" },
  { q: "The ___ is very important.", a: "rule", hint: "その規則は非常に重要です。" },
  { q: "He has a lot of ___.", a: "talent", hint: "彼は多くの才能を持っています。" },
  { q: "The ___ is 50 percent.", a: "rate", hint: "割合（率）は50パーセントです。" },
  { q: "She has a lot of ___.", a: "confidence", hint: "彼女は自信を持っています。" },
  { q: "The ___ was very clear.", a: "signal", hint: "信号（合図）はとても明確でした。" },
  { q: "I have a ___ for the party.", a: "plan", hint: "パーティーの計画があります。" },
  { q: "The ___ is very narrow.", a: "range", hint: "範囲がとても狭いです。" },
  { q: "He has a lot of ___.", a: "knowledge", hint: "彼は知識が豊富です。" },
  { q: "The ___ was very loud.", a: "sound", hint: "その音はとても大きかったです。" },
  { q: "She has a good ___.", a: "voice", hint: "彼女は良い声を持っています。" },
  { q: "The ___ is very cold.", a: "season", hint: "その季節はとても寒いです。" },
  { q: "I have a ___ about the plan.", a: "doubt", hint: "その計画に疑いを持っています。" },
  { q: "The ___ is very quiet.", a: "peace", hint: "平和でとても静かです。" },
  { q: "He has a lot of ___.", a: "courage", hint: "彼にはたくさんの勇気があります。" },
  { q: "The ___ was very big.", a: "event", hint: "それは大きな行事（出来事）でした。" },
  { q: "She has a good ___.", a: "habit", hint: "彼女は良い習慣を持っています。" },
  { q: "The ___ is very high.", a: "level", hint: "レベル（水準）がとても高いです。" },
  { q: "I have a ___ in my office.", a: "desk", hint: "オフィスに机があります。" },
  { q: "The ___ is very simple.", a: "structure", hint: "構造はとても単純です。" },
  { q: "He has a lot of ___.", a: "money", hint: "彼はお金をたくさん持っています。" },
  { q: "The ___ was very fast.", a: "speed", hint: "速度が非常に早かったです。" },
  { q: "She has a lot of ___.", a: "passion", hint: "彼女は情熱を持っています。" },
  { q: "The ___ is very large.", a: "space", hint: "その空間（宇宙）はとても広いです。" },
  { q: "I have a ___ with my friend.", a: "promise", hint: "友達と約束があります。" },
  { q: "The ___ was very high.", a: "price", hint: "価格がとても高かったです。" },
  { q: "He has a lot of ___.", a: "honor", hint: "彼は名誉（光栄）に思っています。" },
  { q: "The ___ is very famous.", a: "museum", hint: "その博物館はとても有名です。" },
  { q: "I have a ___ about the news.", a: "interest", hint: "そのニュースに興味を持っています。" },
  { q: "The ___ was very small.", a: "island", hint: "その島はとても小さかったです。" },
  { q: "She has a lot of ___.", a: "wisdom", hint: "彼女は知恵が豊富です。" },
  { q: "The ___ is very hot.", a: "summer", hint: "夏はとても暑いです。" },
  { q: "I have a ___ for the exam.", a: "target", hint: "試験に向けた目標（ターゲット）があります。" },
  { q: "The ___ was very long.", a: "bridge", hint: "その橋はとても長かったです。" },
  { q: "He has a lot of ___.", a: "spirit", hint: "彼は強い精神（魂）を持っています。" },
  { q: "The ___ is very blue.", a: "ocean", hint: "海はとても青いです。" },
  { q: "I have a ___ for the car.", a: "license", hint: "車の免許証を持っています。" },
  { q: "The ___ was very low.", a: "bottom", hint: "底（一番下）はとても低かったです。" },
  { q: "She has a lot of ___.", a: "patience", hint: "彼女はとても忍耐強いです。" },
  { q: "The ___ was very green.", a: "forest", hint: "森はとても緑豊かでした。" },
  { q: "I have a ___ for the door.", a: "code", hint: "ドアの暗証番号（コード）を持っています。" },
  { q: "The ___ is very large.", a: "continent", hint: "その大陸はとても大きいです。" },
  { q: "He has a lot of ___.", a: "pride", hint: "彼は誇りを持っています。" },
  { q: "The ___ was very cold.", a: "winter", hint: "冬はとても寒かったです。" },
  { q: "I have a ___ about the story.", a: "truth", hint: "その話の真実を知っています。" },
  { q: "The ___ was very clear.", a: "sky", hint: "空はとても澄んでいました。" },
  { q: "She has a lot of ___.", a: "skill", hint: "彼女は高い技術（技能）を持っています。" },
  { q: "The ___ is very far.", a: "star", hint: "星はとても遠くにあります。" },
  { q: "I have a ___ for the movie.", a: "ticket", hint: "映画のチケットを持っています。" },
  { q: "The ___ was very dark.", a: "night", hint: "夜はとても暗かったです。" },
  { q: "He has a lot of ___.", a: "faith", hint: "彼は強い信頼（信仰）を持っています。" },
  { q: "The ___ is very beautiful.", a: "flower", hint: "その花はとても美しいです。" },
  { q: "I have a ___ for the kitchen.", a: "knife", hint: "キッチン用のナイフを持っています。" },
  { q: "The ___ was very small.", a: "village", hint: "その村はとても小さかったです。" },
  { q: "She has a lot of ___.", a: "dreams", hint: "彼女はたくさんの夢を持っています。" },
  { q: "The ___ is very deep.", a: "lake", hint: "その湖はとても深いです。" },
  { q: "I have a ___ for the flight.", a: "seat", hint: "飛行機の座席を確保しています。" },
  { q: "The ___ was very old.", a: "church", hint: "その教会はとても古かったです。" },
  { q: "He has a lot of ___.", a: "humor", hint: "彼はユーモアがあります。" },
  { q: "The ___ was very high.", a: "wall", hint: "その壁はとても高かったです。" },
  { q: "I have a ___ about the trip.", a: "memory", hint: "旅行についての思い出があります。" },
  { q: "The ___ is very wide.", a: "road", hint: "その道路はとても広いです。" },
  { q: "She has a lot of ___.", a: "luck", hint: "彼女は運が良いです。" },
  { q: "The ___ was very small.", a: "box", hint: "その箱はとても小さかったです。" },
  { q: "I have a ___ for the dog.", a: "bone", hint: "犬用の骨を持っています。" },
  { q: "The ___ was very light.", a: "wind", hint: "風はとても弱（軽）かったです。" },
  { q: "The ___ is very bright.", a: "sun", hint: "太陽はとても眩しいです。" }
]
};

const QuizApp = () => {
  const [view, setView] = useState('menu');
  const [currentStage, setCurrentStage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [cleared, setCleared] = useState({ stage1: false, stage2: false, stage3: false });
  
  // 1問ごとの判定用状態
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 選んだ答え
  const [isCorrect, setIsCorrect] = useState(null); // 正解かどうか

  useEffect(() => {
    const saved = localStorage.getItem('vocab_v4_crowns');
    if (saved) setCleared(JSON.parse(saved));
  }, []);

  const startQuiz = (stageKey) => {
    const rawData = allStagesData[stageKey] || [];
    const selected = [...rawData].sort(() => 0.5 - Math.random()).slice(0, 30);
    const formatted = selected.map(item => {
      const options = [item.a];
      const otherPool = rawData.filter(d => d.a !== item.a).map(d => d.a);
      while (options.length < 4 && otherPool.length > 0) {
        const rand = otherPool.splice(Math.floor(Math.random() * otherPool.length), 1)[0];
        options.push(rand);
      }
      return { ...item, options: options.sort(() => 0.5 - Math.random()) };
    });
    setQuestions(formatted);
    setCurrentStage(stageKey);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setView('quiz');
  };

  const checkAnswer = (ans) => {
    if (selectedAnswer !== null) return; // 判定中はクリック不可

    const correct = ans === questions[currentIndex].a;
    setSelectedAnswer(ans);
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowHint(false);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (score === questions.length) {
        const newCleared = { ...cleared, [currentStage]: true };
        setCleared(newCleared);
        localStorage.setItem('vocab_v4_crowns', JSON.stringify(newCleared));
      }
      setView('result');
    }
  };

  // --- メニュー画面 ---
  if (view === 'menu') return (
    <div className="min-h-screen bg-[#F0F7FF] p-6 flex flex-col items-center font-sans text-[#1F2937]">
      <header className="mt-12 mb-10 text-center">
        <div className="bg-white px-4 py-1 rounded-full shadow-sm border border-blue-100 inline-block mb-2">
          <span className="text-xs font-black text-blue-500 tracking-widest uppercase">Daily Challenge</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter text-slate-800">VOCAB <span className="text-blue-500">BOOST</span></h1>
      </header>

      <div className="w-full max-w-md space-y-4">
        {['stage1', 'stage2', 'stage3'].map((s, idx) => (
          <button key={s} onClick={() => startQuiz(s)}
            className="w-full bg-white p-1 rounded-3xl shadow-[0_8px_0_#e2e8f0] active:shadow-none active:translate-y-1 transition-all border-2 border-slate-100 group">
            <div className="bg-white rounded-[1.4rem] p-5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-inner ${idx === 0 ? 'bg-[#FF6B6B]' : idx === 1 ? 'bg-[#4D96FF]' : 'bg-[#6BCB77]'}`}>
                  {idx + 1}
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-black text-slate-700 capitalize">{s}</h2>
                  <p className="text-xs font-bold text-slate-400">30 Questions</p>
                </div>
              </div>
              {cleared[s] ? <span className="text-4xl animate-pulse">👑</span> : <div className="text-slate-300 group-hover:text-blue-500 transition-colors font-black">START</div>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // --- クイズ画面 ---
  if (view === 'quiz') {
    const q = questions[currentIndex];
    return (
      <div className="min-h-screen bg-white p-6 flex flex-col items-center font-sans">
        <div className="w-full max-w-md">
          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-8">
            <button onClick={() => setView('menu')} className="text-slate-300 font-black text-sm hover:text-slate-500">EXIT</button>
            <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-50">
              <div className="h-full bg-blue-500 transition-all duration-500" style={{width: `${((currentIndex+1)/questions.length)*100}%`}}></div>
            </div>
            <span className="font-black text-slate-400 text-sm">{currentIndex + 1}/30</span>
          </div>

          {/* Question Card */}
          <div className={`relative p-8 rounded-[2.5rem] border-4 transition-all duration-300 min-h-[220px] flex flex-col justify-center items-center text-center mb-8 
            ${selectedAnswer === null ? 'bg-[#F9FBFF] border-blue-50 shadow-inner' : isCorrect ? 'bg-green-50 border-green-200 shadow-none' : 'bg-red-50 border-red-100 shadow-none'}`}>
            
            <h2 className="text-2xl font-bold text-slate-800 leading-relaxed">
              {q.q.split("___")[0]}
              <span className={`mx-2 font-black border-b-4 border-dashed px-2 ${isCorrect ? 'text-green-500' : isCorrect === false ? 'text-red-500' : 'text-blue-500 border-blue-200'}`}>
                ( {selectedAnswer ? selectedAnswer : '      '} )
              </span>
              {q.q.split("___")[1]}
            </h2>

            <div className="mt-6">
              {showHint || selectedAnswer !== null ? (
                <p className="text-blue-500 font-bold bg-white/60 px-4 py-1 rounded-full text-sm">🇯🇵 {q.hint}</p>
              ) : (
                <button onClick={() => setShowHint(true)} className="text-[10px] font-black text-slate-300 hover:text-blue-400 uppercase tracking-widest transition-colors">Hint?</button>
              )}
            </div>
          </div>

          {/* Options */}
          <div className="grid gap-3">
            {q.options.map((opt, i) => {
              const isThisSelected = selectedAnswer === opt;
              const isThisCorrect = opt === q.a;
              
              let btnStyle = "bg-white border-slate-100 shadow-[0_5px_0_#f1f5f9]";
              let textStyle = "text-slate-600";

              if (selectedAnswer !== null) {
                if (isThisCorrect) {
                  btnStyle = "bg-green-500 border-green-600 shadow-[0_5px_0_#15803d]";
                  textStyle = "text-white";
                } else if (isThisSelected) {
                  btnStyle = "bg-red-500 border-red-600 shadow-[0_5px_0_#b91c1c]";
                  textStyle = "text-white";
                } else {
                  btnStyle = "bg-white border-slate-50 opacity-40";
                  textStyle = "text-slate-300";
                }
              }

              return (
                <button key={i} onClick={() => checkAnswer(opt)} disabled={selectedAnswer !== null}
                  className={`w-full p-1 rounded-2xl transition-all border-2 ${btnStyle} ${selectedAnswer === null ? 'hover:-translate-y-1 active:translate-y-1 active:shadow-none' : ''}`}>
                  <div className={`py-4 px-6 rounded-xl flex items-center font-black text-lg ${textStyle}`}>
                    <span className={`w-8 h-8 mr-4 flex items-center justify-center rounded-lg text-sm ${selectedAnswer === null ? 'bg-slate-50 text-slate-300' : 'bg-white/20 text-white'}`}>{i+1}</span>
                    {opt}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Check/Next Button */}
          {selectedAnswer !== null && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
              <button onClick={nextQuestion} 
                className={`w-full py-5 rounded-[2rem] font-black text-xl text-white shadow-xl transition-all active:scale-95 ${isCorrect ? 'bg-green-500 shadow-green-200' : 'bg-red-500 shadow-red-200'}`}>
                {currentIndex + 1 === questions.length ? 'SEE RESULT' : 'CONTINUE →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- 結果画面 ---
  if (view === 'result') return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-8 text-center transition-colors duration-700 ${score === 30 ? 'bg-blue-500' : 'bg-slate-800'}`}>
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl w-full max-w-sm border-b-8 border-slate-200">
        <div className="text-8xl mb-6">{score === 30 ? '👑' : '🎯'}</div>
        <h2 className="text-2xl font-black text-slate-800 mb-1">YOUR SCORE</h2>
        <div className="text-7xl font-black text-blue-500 mb-4">{score}<span className="text-xl text-slate-300">/30</span></div>
        <p className="text-slate-400 font-bold mb-10 leading-relaxed italic">
          {score === 30 ? 'PERFECT! You are a master!' : 'Nice try! Aim for 30 points to get a crown.'}
        </p>
        <button onClick={() => setView('menu')} className="w-full py-5 bg-blue-500 text-white rounded-[2rem] font-black text-xl shadow-lg hover:bg-blue-600 transition-all active:scale-95">
          DONE
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
// App.jsxの一番上に貼り付け
