########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Milan Singh
SID = 1001888297
EMAIL = mxs8297@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
VIDEOLINK=https://youtube.com/shorts/yz-qKRH5OWw?feature=share

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"