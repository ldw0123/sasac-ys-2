temp = int(input("기온은 어때요?"))
if temp >= 30:
  print("너무 더워요 에어컨이 필요해요")
elif temp >= 15 and temp  < 30:
  print("완벽한 날씨에요!")
elif -10 < temp < 15:
  print("외투를 챙기세요")
else:
  print("너무 추워서 얼어버릴 거 같아요")