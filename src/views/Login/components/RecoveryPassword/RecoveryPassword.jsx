import styles from "./styles";
const RecoveryPassword = ({ closeModal }) => {
  return (
    <styles.Backdrop>
      <styles.Modal>
        <styles.Text>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </styles.Text>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <styles.Input placeholder="username or email" />
          <styles.Button onClick={closeModal}>Send</styles.Button>
        </div>
      </styles.Modal>
    </styles.Backdrop>
  );
};

export default RecoveryPassword;
