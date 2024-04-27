# CÓDIGO EM PYTHON

def calcular_media(nome, nota1, nota2, nota3):
    media = (nota1 + nota2 + nota3) / 3
    return media

def main():
    nome_aluno = input("Digite o nome do aluno: ")
    nota1 = float(input("Digite a nota da primeira prova: "))
    nota2 = float(input("Digite a nota da segunda prova: "))
    nota3 = float(input("Digite a nota da terceira prova: "))
    
    media = calcular_media(nome_aluno, nota1, nota2, nota3)
    
    print(f'O aluno {nome_aluno} teve média {media:.2f}.')

if __name__ == "__main__":
    main()
