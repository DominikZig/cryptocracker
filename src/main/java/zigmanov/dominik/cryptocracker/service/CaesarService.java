package zigmanov.dominik.cryptocracker.service;

import org.springframework.stereotype.Service;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;

import javax.validation.constraints.NotNull;

@Service("CaesarService")
public class CaesarService
{
    public static boolean isAlpha(Character c)
    {
        return Character.isLetter(c);
    }

    public String encryptMessage(Key theKey, @NotNull PlainText thePlainText)
    {
        String returnValue = "";

        for (int i = 0; i < thePlainText.getPlainText().length(); i++)
        {
            if (isAlpha(thePlainText.getPlainText().charAt(i)) == true)
            {
                returnValue += (thePlainText.getPlainText().charAt(i) - 'A' + theKey.getCipherKey()) + 'A';

                return returnValue;
            }
            else
            {
                returnValue += thePlainText.getPlainText().charAt(i);

                return returnValue;
            }
        }

        return null;
    }

//    public String encryptMessage(int theKeyValue, String thePlainTextValue)
//    {
//        System.out.println("test");
//
//        String returnValue = "";
//
//        for (int i = 0; i < thePlainTextValue.length(); i++)
//        {
//            if (isAlpha(thePlainTextValue.charAt(i)) == true)
//            {
//                returnValue += (thePlainTextValue.charAt(i) - 'A' + theKeyValue) + 'A';
//
//                return returnValue;
//            }
//            else
//            {
//                returnValue += thePlainTextValue.charAt(i);
//
//                return returnValue;
//            }
//        }
//
//        return null;
//    }
}
