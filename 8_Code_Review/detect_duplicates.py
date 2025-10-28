def find_duplicates(input_list):
    result = []
    for i in range(len(input_list)):
        for j in range(i + 1, len(input_list)):
            if input_list[i] == input_list[j] and input_list[i] not in result:
                result.append(input_list[i])
    return result