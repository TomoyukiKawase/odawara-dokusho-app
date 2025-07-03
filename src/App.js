import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-dark">小田原おしゃべり読書会</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" className="text-dark">ホーム</Nav.Link>
                <Nav.Link href="/schedule" className="text-dark">開催予定</Nav.Link>
                <Nav.Link href="/faq" className="text-dark">よくある質問</Nav.Link>
                <Nav.Link href="/blog" className="text-dark">ブログ</Nav.Link>
                <Nav.Link href="/contact" className="text-dark">お問い合わせ</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section bg-primary text-white d-flex align-items-center justify-content-center">
        <Container className="content-width">
          <h1>この読書会について</h1>
        </Container>
      </section>

      <section id="about" className="py-5">
        <Container className="content-width">
          <p>神奈川県小田原市で月に一度開催している紹介型の読書会です。</p>
          <p>普段本なんて読まないけどちょっと興味のある方、本がそこそこ好きな方、本が大好きな方、そんな方々に来て頂きたいミニイベントです。</p>
          <p>「読書会」って何？って方も多いと思います。読書会に決まったスタイルはありませんが、この会では本を話のネタに皆でおしゃべりを楽しむことを最大の目的としています。なので紹介したい本はなくても、他の方が本を紹介するのに耳を傾けつつおしゃべりに加わるというのも全然アリです。基本的な流れは以下の通りです。</p>
          <ul>
            <li>一人ずつ自分の好きな本とその魅力、オススメポイントを紹介</li>
            <li>本のジャンルは何でもOK、そして何冊おすすめしてもOK（雑誌・マンガも大歓迎！）</li>
            <li>持ち時間は5分程度</li>
            <li>紹介された本のことを中心にテキトウに雑談</li>
          </ul>
          <p>とにかく本というツール、読書という体験を通して人と人との出会いもあったら良いなあ、そんな事も考えています。ご不明なことがありましたらご遠慮無くお問い合わせ下さい！</p>
          <h3 className="text-primary">開催場所、参加費</h3>
          <p>主に小田原駅周辺の飲食店にて開催しています。最低でもワンドリンク以上のオーダーをお願いします。お店を貸し切りにしているわけではないので声が大きくなりすぎないようご注意下さい。</p>
          <p>参加費は毎回500円頂いています。参加者だけではなく主催者も参加費を支払っています。このお金は本に関する活動に役立てています。これまでに講演会の謝金、災害にあった図書館への寄付、ブックカフェオープンする方への支援（クラウドファンディング）、などに使いました。</p>
          <p>しかし2023年現在、新型コロナウイルスの影響でオンライン開催とすることもあります。その際の参加費は以下の通りとします。</p>
          <ul>
            <li>基本的に参加費500円</li>
            <li>但し学生及びオンライン初参加の方は無料</li>
          </ul>
        </Container>
      </section>

      <footer className="bg-white py-3">
        <Container className="content-width">
          <Nav className="justify-content-center">
            <Nav.Link href="/" className="text-dark">ホーム</Nav.Link>
            <Nav.Link href="/schedule" className="text-dark">開催予定</Nav.Link>
            <Nav.Link href="/faq" className="text-dark">よくある質問</Nav.Link>
            <Nav.Link href="/blog" className="text-dark">ブログ</Nav.Link>
            <Nav.Link href="/privacy" className="text-dark">プライバシーポリシー</Nav.Link>
            <Nav.Link href="/contact" className="text-dark">お問い合わせ</Nav.Link>
          </Nav>
          <p className="text-dark">&copy; 2025 . All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
