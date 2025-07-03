import React from 'react';
import { Container } from 'react-bootstrap';

function FAQ() {
  return (
    <section id="faq" className="py-5">
      <Container className="content-width">
        <h2 className="text-primary">よくある質問</h2>

        <h3 className="text-primary mt-4">Q1.どのような本を紹介すれば良いのでしょうか？</h3>
        <p>A1.どんな本でも歓迎です。小説・エッセイ・新書・マンガ・写真集・雑誌・etc、あなたのお好きな本をお持ち下さい。過去に参加者が紹介した本は以下のリンクにまとめてあります。</p>
        <p><a href="https://booklog.jp/users/odwdokushokai" target="_blank" rel="noopener noreferrer">「小田原おしゃべり読書会」の本棚 (odwdokushokai) – ブクログ</a></p>

        <h3 className="text-primary mt-4">Q2.どのような年代の方が参加されますか？</h3>
        <p>A2.30代～50代の方が多いですが、10代から80代まで幅広い年代の方が参加されます。</p>

        <h3 className="text-primary mt-4">Q3.男女比はどのくらいですか？</h3>
        <p>A3.そのときそのときで大きくバラツキがありますが、大体半々くらいです。</p>

        <h3 className="text-primary mt-4">Q4.主催者はどんな方ですか？</h3>
        <p>A4.小田原生まれ小田原育ち、東京勤務のサラリーマン、40代男性。仕事はITエンジニアをやっています。読書会以外にも地域のイベントなどに関わることが多いです。</p>

        <h3 className="text-primary mt-4">Q5.すごい読書家の方ばかりですか？不安です。</h3>
        <p>A5.できる限り敷居の低いゆるい会を目指しています。また普段本を読まない方が本を読む機会作るために使って頂けると嬉しいです。</p>

      </Container>
    </section>
  );
}

export default FAQ;
