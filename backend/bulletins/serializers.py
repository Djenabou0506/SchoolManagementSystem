from rest_framework import serializers
from grades.models import Grade


class BulletinSerializer(serializers.Serializer):

    id = serializers.IntegerField()

    student_nom = serializers.SerializerMethodField()

    niveau = serializers.SerializerMethodField()

    classe = serializers.SerializerMethodField()

    notes = serializers.SerializerMethodField()

    moyenne_generale = serializers.SerializerMethodField()

    mention = serializers.SerializerMethodField()



    def get_student_nom(self, obj):

        return f"{obj.prenom} {obj.nom}"



    def get_niveau(self, obj):

        if obj.classe:

            nom_classe = obj.classe.nom.lower()


            # Primaire
            if (
                "cp" in nom_classe
                or "ce" in nom_classe
                or "cm" in nom_classe
            ):
                return "Primaire"


            # Collège
            elif (
                "6em" in nom_classe
                or "5em" in nom_classe
                or "4em" in nom_classe
                or "3em" in nom_classe
            ):
                return "Collège"


            # Lycée
            elif (
                "2em" in nom_classe
                or "1er" in nom_classe
                or "term" in nom_classe
                or "tle" in nom_classe
            ):
                return "Lycée"


        return ""



    def get_classe(self, obj):

        if obj.classe:
            return obj.classe.nom

        return ""



    def get_notes(self, obj):

        grades = Grade.objects.filter(
            student=obj
        )

        data = []


        for grade in grades:

            data.append({

                "matiere": grade.subject.nom,

                "note": grade.note,

                "coefficient": grade.subject.coefficient

            })


        return data



    def get_moyenne_generale(self, obj):

        grades = Grade.objects.filter(
            student=obj
        )


        total = 0

        total_coefficient = 0


        for grade in grades:

            total += grade.note * grade.subject.coefficient

            total_coefficient += grade.subject.coefficient



        if total_coefficient == 0:

            return 0



        moyenne = total / total_coefficient


        return round(moyenne, 2)



    def get_mention(self, obj):

        moyenne = self.get_moyenne_generale(obj)


        niveau = self.get_niveau(obj)



        # =====================
        # PRIMAIRE (/10)
        # =====================

        if niveau == "Primaire":


            if moyenne <= 4:

                return "Insuffisant"


            elif moyenne < 6:

                return "Passable"


            elif moyenne < 7:

                return "Assez bien"


            elif moyenne < 8:

                return "Bien"


            else:

                return "Très bien"



        # =====================
        # COLLEGE ET LYCEE (/20)
        # =====================

        else:


            if moyenne < 10:

                return "Insuffisant"


            elif moyenne < 12:

                return "Passable"


            elif moyenne < 14:

                return "Assez bien"


            elif moyenne < 16:

                return "Bien"


            elif moyenne < 18:

                return "Très bien"


            else:

                return "Excellent"