package zigmanov.dominik.cryptocracker.model;

public class UserInput
{
    private String plainText;
    private int cipherKey;

    public UserInput()
    {
    }

    public String getPlainText()
    {
        return plainText;
    }

    public void setPlainText(String plainText)
    {
        this.plainText = plainText;
    }

    public int getCipherKey()
    {
        return cipherKey;
    }

    public void setCipherKey(int cipherKey)
    {
        this.cipherKey = cipherKey;
    }
}
