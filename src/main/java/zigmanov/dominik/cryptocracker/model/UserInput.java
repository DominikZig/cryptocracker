package zigmanov.dominik.cryptocracker.model;

public class UserInput
{
    private String inputtedText;
    private int cipherKey;

    public UserInput()
    {
    }

    public String getInputtedText()
    {
        return inputtedText;
    }

    public void setInputtedTextText(String inputtedText)
    {
        this.inputtedText = inputtedText;
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
