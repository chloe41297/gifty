const SearchBox = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="검색어를 입력해 주세요."></input>
      </form>
      <style jsx>{`
        form {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
        }
        input {
          width: calc(100% - 40px);
          padding: 0 20px;
          height: 35px;
          border: none;
          background-color: whitesmoke;
          border-radius: 35px;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};
export default SearchBox;
