SELECT CASE WHEN suma IS NULL THEN 0 ELSE CASE WHEN over IS NULL THEN suma ELSE suma - over END END
    FROM 
    (SELECT sum(r-l) AS suma FROM segments),
    (SELECT SUM(overlap) AS over FROM (SELECT
                                CASE WHEN a.r >= b.l and a.l <= b.l 
                                    THEN CASE WHEN a.r >= b.r THEN b.r - b.l ELSE a.r - b.l END
                                    ELSE 0
                                    END AS overlap
                                FROM segments AS a, segments AS b
                                WHERE 
                                (a.l != b.l or  a.r != b.r)  
                                    and overlap != 0
                                GROUP BY b.l,b.r   
                            ) as overlap

    );
