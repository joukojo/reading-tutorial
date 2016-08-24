#!/bin/bash

 WORDS=$(grep word words-2.json )

 for WORD in $WORDS
 do
   WORD=$(echo $WORD | tr -d \",)
   if [ "$WORD" == "words:" ];
   then
     continue
   fi

  echo $WORD
  CLEAN_WORD=$(echo $WORD | tr -d ,\"-)
  echo clean: $CLEAN_WORD
  espeak -vfi -w "audio/$WORD.wav" $CLEAN_WORD
done
