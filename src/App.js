import React from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

// Stripeの公開可能キーを設定します。これは環境変数から取得するか、直接記述します。
// 実際のアプリケーションでは、環境変数を使用することを強く推奨します。
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'YOUR_STRIPE_PUBLISHABLE_KEY');

function App() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Netlify Functionを呼び出してStripeのチェックアウトセッションを作成します。
    const response = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    // エラーハンドリング
    if (session.error) {
      alert(session.error);
      return;
    }

    // Stripeのチェックアウトページにリダイレクトします。
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">小田原おしゃべり読書会</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">読書会について</Nav.Link>
              <Nav.Link href="#schedule">開催スケジュール</Nav.Link>
              <Nav.Link href="#join">参加方法</Nav.Link>
              <Nav.Link href="#contact">お問い合わせ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="App-header text-center py-5 bg-light">
        <Container>
          <h1 className="display-4 text-primary">本を語り、人を知る。</h1>
          <p className="lead text-secondary">小田原おしゃべり読書会は、本を通じて新しい出会いと発見を提供するコミュニティです。</p>
        </Container>
      </header>

      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4 text-primary">読書会について</h2>
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

      <section id="schedule" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 text-primary">開催スケジュール</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="text-primary">次回開催予定</Card.Title>
                  <Card.Text>
                    日時: 毎月第3土曜日 14:00〜16:00<br />
                    場所: 小田原駅周辺のカフェ（詳細は参加者にご連絡します）<br />
                    参加費: 500円
                  </Card.Text>
                  <Button variant="primary">詳細を見る</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="text-primary">オンライン読書会</Card.Title>
                  <Card.Text>
                    日時: 不定期開催（詳細はSNSでお知らせします）<br />
                    場所: Zoom<br />
                    参加費: 無料（学生・初回参加者）
                  </Card.Text>
                  <Button variant="outline-primary">オンライン読書会に参加</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section id="join" className="py-5">
        <Container>
          <h2 className="text-center mb-4 text-primary">参加方法</h2>
          <p>読書会への参加は簡単です。以下のステップでご参加いただけます。</p>
          <ol>
            <li>当ウェブサイトまたはSNSで最新の開催情報を確認します。</li>
            <li>参加を希望する読書会に申し込みます。（オンライン決済はこちらから）</li>
            <li>当日、お気に入りの本を持参して会場にお越しください。</li>
          </ol>
          <div className="text-center mt-4">
            <Button variant="success" size="lg" onClick={handleCheckout}>参加を申し込む</Button>
          </div>
        </Container>
      </section>

      <footer className="bg-primary text-white text-center py-3">
        <Container>
          <p>&copy; 2025 小田原おしゃべり読書会. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
