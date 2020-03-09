import List from "../components/List";

const Home = () => (
  <>
    <h1>Next.js-TypeScript-TODOリスト</h1>
    <List />
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
        }
        #app {
          max-width: 640px;
          margin: 0 auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        thead th {
          border-bottom: 2px solid #0099e4; /*#d31c4a */
          color: #0099e4;
        }
        th,
        th {
          padding: 0 8px;
          line-height: 40px;
        }
        thead th.id {
          width: 50px;
        }
        thead th.state {
          width: 100px;
        }
        thead th.button {
          width: 60px;
        }
        tbody td.button,
        tbody td.state {
          text-align: center;
        }
        tbody tr td,
        tbody tr th {
          border-bottom: 1px solid #ccc;
          transition: All 0.4s;
        }
        tbody tr.Done td,
        tbody tr.Done th {
          background: #f8f8f8;
          color: #bbb;
        }
        tbody tr:hover td,
        tbody tr:hover th {
          background: #f4fbff;
        }
        button {
          border: none;
          border-radius: 20px;
          line-height: 24px;
          padding: 0 8px;
          background: #0099e4;
          color: #fff;
          cursor: pointer;
        }
      `}
    </style>
  </>
);

export default Home;
