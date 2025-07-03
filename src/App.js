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
          <p>小田原おしゃべり読書会は、毎月小田原市内で開催されている読書会です。お気に入りの本を持ち寄り、その本について語り合うカジュアルな集まりです。読書を始めたばかりの方から、熱心な読書家まで、どなたでも大歓迎です。雑誌や漫画でもOK！本をきっかけに会話を楽しむことを目的としています。</p>
          <p>通常、小田原駅周辺の飲食店で開催しており、参加費は500円です。この参加費は、読書に関する活動の支援に充てられます。</p>
          <p>新型コロナウイルスの影響により、オンラインでの開催も行っております。学生の方やオンライン初参加の方は無料でご参加いただけます。</p>
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
