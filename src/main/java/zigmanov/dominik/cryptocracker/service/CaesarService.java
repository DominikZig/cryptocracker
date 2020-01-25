package zigmanov.dominik.cryptocracker.service;

import org.springframework.stereotype.Service;
import zigmanov.dominik.cryptocracker.model.Key;
import zigmanov.dominik.cryptocracker.model.PlainText;

@Service("CaesarService")
public class CaesarService
{
    public static boolean isAlpha(Character c)
    {
        return Character.isLetter(c);
    }

    public String encryptMessage(Key theKey, PlainText thePlainText)
    {
        StringBuilder sb = new StringBuilder();

        String lowerPlainText = thePlainText.getPlainText().toLowerCase();

        for (int i = 0; i < lowerPlainText.length(); i++)
        {
            if (isAlpha(lowerPlainText.charAt(i)) == true)
            {
                sb.append((lowerPlainText.charAt(i) - 'a' + theKey.getCipherKey()) % 26 + 'a');

                System.out.println(sb);
            }
            else
            {
                sb.append(lowerPlainText.charAt(i));

                System.out.println("else"+sb);
            }
        }

        System.out.println("Final text:"+sb.toString());

        return sb.toString();
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
